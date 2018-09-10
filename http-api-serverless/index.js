const namerator = require('./namerator');

exports.handler = async (event, context, callback) => {
    const words = event.queryStringParameters.words.split(',');
		const count = event.queryStringParameters.count;
		const suggestions = namerator.getNameSuggestions(words, count);

		return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            suggestions
        })
    };
};
