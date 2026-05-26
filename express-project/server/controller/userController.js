export const homepage = (request, response) => {
  const abcd = {
    title: "Title of the ",
    des: "This is the movie's description",
  };
  response.render("home", { abcd });
};

export const about = (request, response) => {
  response.render("about");
};
