const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: "AKIAR73REG7EDPY3GCBQ",
  secretAccessKey: "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",
  region: "us-west-2"
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });

export default (req, res) => {
  const body = req.body;

  const params = {
    Source: "Alcatraz Tours & Tickets<embtelsolutions@gmail.com>",
    Destination: { ToAddresses: ["alcatraztourstickets@gmail.com"], BccAddresses:["dan@embtelsolutions.com"] },
    Message: {
      Subject: {
        Data: `New Tour Booking Request from your website alcatraztourstickets.com`,
      },
      Body: {
        Text: {
          Data: `
          Hello Admin, 

          You have got a new Tour Booking enquiry from your website alcatraztourstickets.com (Contact Page). 

          Here are the details. 

          Name: ${body.name}\n
          Email: ${body.email}\n
          Phone Number: ${body.phone}\n
          Selected Tour: ${body.tour}\n
          Persons: ${body.persons}\n
          Message: ${body.message}\n

          Thank you!
                  `,
        },
      },
    },
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      res.send({ status: "success" });
    })
    .catch((error) => {
      console.log("contact error", error);

      res.send({ status: "error" });
    });
};
