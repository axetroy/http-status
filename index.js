/**
 * Reference golang net/http module
 */

/**
 * Generate a New status
 * @param code
 * @param message
 * @constructor
 */
function Status(code, message) {
  this.code = code;
  this.message = message;
}

Status.prototype.valueOf = function() {
  return this.code;
};

Status.prototype.toString = function() {
  return this.message;
};

// 100
hs.Continue = new Status(100, 'Continue');
hs.SwitchingProtocols = new Status(101, 'Switching Protocols');
hs.Processing = new Status(102, 'Processing');

// 200
hs.OK = new Status(200, 'OK');
hs.Created = new Status(201, 'Created');
hs.Accepted = new Status(202, 'Accepted');
hs.NonAuthoritativeInfo = new Status(203, 'Non-Authoritative Information');
hs.NoContent = new Status(204, 'No Content');
hs.ResetContent = new Status(205, 'Reset Content');
hs.PartialContent = new Status(206, 'Partial Content');
hs.MultiStatus = new Status(207, 'Multi-Status');
hs.AlreadyReported = new Status(208, 'Already Reported');
hs.IMUsed = new Status(226, 'IM Used');

// 300
hs.MultipleChoices = new Status(300, 'Multiple Choices');
hs.MovedPermanently = new Status(301, 'Moved Permanently');
hs.Found = new Status(302, 'Found');
hs.SeeOther = new Status(303, 'See Other');
hs.NotModified = new Status(304, 'Not Modified');
hs.UseProxy = new Status(305, 'Use Proxy');
hs.TemporaryRedirect = new Status(307, 'Temporary Redirect');
hs.PermanentRedirect = new Status(308, 'Permanent Redirect');

// 400
hs.BadRequest = new Status(400, 'Bad Request');
hs.Unauthorized = new Status(401, 'Unauthorized');
hs.PaymentRequired = new Status(402, 'Payment Required');
hs.Forbidden = new Status(403, 'Forbidden');
hs.NotFound = new Status(404, 'Not Found');
hs.MethodNotAllowed = new Status(405, 'Method Not Allowed');
hs.NotAcceptable = new Status(406, 'Not Acceptable');
hs.ProxyAuthRequired = new Status(407, 'Proxy Authentication Required');
hs.RequestTimeout = new Status(408, 'Request Timeout');
hs.Conflict = new Status(409, 'Conflict');
hs.Gone = new Status(410, 'Gone');
hs.LengthRequired = new Status(411, 'Length Required');
hs.PreconditionFailed = ne  w Status(412, 'Precondition Failed');
hs.RequestEntityTooLarge = new Status(413, 'Request Entity Too Large');
hs.RequestURITooLong = new Status(414, 'Request URI Too Long');
hs.UnsupportedMediaType = new Status(415, 'Unsupported Media Type');
hs.RequestedRangeNotSatisfiable = new Status(416, 'Requested Range Not Satisfiable');
hs.ExpectationFailed = new Status(417, 'Expectation Failed');
hs.Teapot = new Status(418, 'I\'m a teapot');
hs.UnprocessableEntity = new Status(422, 'Unprocessable Entity');
hs.Locked = new Status(423, 'Locked');
hs.FailedDependency = new Status(424, 'Failed Dependency');
hs.UpgradeRequired = new Status(426, 'Upgrade Required');
hs.PreconditionRequired = new Status(428, 'Precondition Required');
hs.TooManyRequests = new Status(429, 'Too Many Requests');
hs.RequestHeaderFieldsTooLarge = new Status(431, 'Request Header Fields Too Large');
hs.UnavailableForLegalReasons = new Status(451, 'Unavailable For Legal Reasons');

// 500
hs.InternalServerError = new Status(500, 'Internal Server Error');
hs.NotImplemented = new Status(501, 'Not Implemented');
hs.BadGateway = new Status(502, 'Bad Gateway');
hs.ServiceUnavailable = new Status(503, 'Service Unavailable');
hs.GatewayTimeout = new Status(504, 'Gateway Timeout');
hs.HTTPVersionNotSupported = new Status(505, 'HTTP Version Not Supported');
hs.VariantAlsoNegotiates = new Status(506, 'Variant Also Negotiates');
hs.InsufficientStorage = new Status(507, 'Insufficient Storage');
hs.LoopDetected = new Status(508, 'Loop Detected');
hs.NotExtended = new Status(510, 'Not Extended');
hs.NetworkAuthenticationRequired = new Status(511, 'Network Authentication Required');

module.exports = hs;
