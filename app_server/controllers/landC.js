var mongoose = require("mongoose");
var Cinema = mongoose.model("Cinema");
var fs=require("fs");
module.exports.test = function(req, res) {
  res.render("landing.html", { status: "success" });
};

module.exports.createCinema = function(req, res) {
  Cinema.create(
    {
      id: 1,
      cinema_name: "cineplex",
      location: "model town",
      capacity: 200,
      reserved: 3,
      goldPrice: 940,
      silverPrice: 340,
      rating: 3,
      description: "Best in town",
      movList: [
        {
          movieid: 1,
          title: "the nun",
          genre: "horror",
          language: "english",
          rating1: 2,
          image:
          {
            data: fs.readFileSync('./public/img/thumbnails/aquaman.jpg').toString('base64'),
            contentType : 'image/jpg'
          },
          description1: "dmscmf",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        },
        {
          movieid: 2,
          title: "the moonstone",
          genre: "horror",
          language: "english",
          rating1: 2,
          description1: "dsdsdff",
          timeS: [
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            },
            {
              time1: new Date(),
              date1: new Date(),
              reservedS: 1
            }
          ]
        }
      ]
    },
    function(err, cinema) {
      if (err) {
        console.log(err);
      } else {
        console.log(cinema);
        res.render("index.html", { cinemaData: cinema });
      }
    }
  );
};
