exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
				headers: {
          'Access-Control-Allow-Origins': '*'
				},
        body: JSON.stringify({
          message: 'Hello Burlington JS!'
        })
    };

    callback(null, response);
};
