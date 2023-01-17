import { useEffect, useCallback, useMemo } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CalendarIcon from "../../icons/CalendarIcon";
import ArrowLeft from "../../icons/ArrowLeft";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./ArticleCards.scss";
import HightLight from "../HightLight/HightLight";

const ArticleCards: React.FC = () => {
  const inputValue = useSelector((state: any) => state.value.value);
  const { articles } = useTypedSelector((state) => state.articles);
  const { fetchArticles, fetchArticle } = useActions();

  useEffect(() => {
    fetchArticles();
  }, []);

  const getDate = (date: string) => {
    const newDate = new Date(date).toString().split(" ");
    return `${newDate[1]} ${newDate[2]}th ${newDate[3]}`;
  };

  const handleSearch = useCallback(
    (str: string) => {
      return <HightLight inputValue={inputValue} str={str} />;
    },
    [inputValue]
  );

  const articlesList = useMemo(
    (list: any[] = []) => {
      if (inputValue) {
        return articles.filter((item) => {
          const matchValue = inputValue.toLowerCase();
          const { summary, title } = item;
          if (summary.toLowerCase().includes(matchValue)) return true;
          if (title.toLowerCase().includes(matchValue)) return true;
          return false;
        });
      }
      return list;
    },
    [inputValue]
  );

  const validateSummary = (summary: string): string => {
    const arrFromSummmary = summary.split("");
    if (arrFromSummmary.length > 100) {
      arrFromSummmary.length = 97;
      arrFromSummmary.push("...");
      return arrFromSummmary.join("");
    }

    return summary;
  };
  const viewMoreInfo = (id: number) =>
    articles?.filter((article) => article.id === id);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "1290px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "100%",
          borderBottom: "1px solid #EAEAEA",
          marginBottom: "45px",
          marginTop: "40px",
        }}
      >
        Results: {articlesList.length}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "400px 400px 400px",
          gap: "45px",
        }}
      >
        {!articlesList && ""}
        {articlesList?.map((article) => {
          return (
            <Card
              key={article.id}
              sx={{
                width: "400px",
                height: "600px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
              }}
            >
              <CardMedia
                component="img"
                alt="article picture"
                height="217"
                width="400"
                image={article.imageUrl}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "313px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <CalendarIcon />
                    <Box sx={{ marginLeft: "8px" }}>
                      {article.publishedAt && getDate(article.publishedAt)}
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#363636",
                      marginTop: "24px",
                      marginBottom: "20px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    component="div"
                  >
                    {handleSearch(article.title)}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#363636",
                      marginBottom: "20px",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {handleSearch(article.summary) &&
                      handleSearch(validateSummary(article.summary))}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions>
                <Button
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "25px",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#363636",
                    lineHeight: "150%",
                  }}
                  onClick={() => fetchArticle(article.id)}
                >
                  <Link to={`/article/${article.id}`} className={"link"}>
                    <Box
                      sx={{
                        marginRight: "6px",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Read more
                    </Box>
                    <ArrowLeft />
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ArticleCards;
