const sendResult = async (res, status, message, data) => {
    return res.status(status).send({ status, message, data });
  };
  
module.exports = sendResult;
  