# CS465

## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Express HTML uses server-side rendering where Node.js compiles Handlebars templates into full documents. This happens on each navigation event. This requires minimal client processing and supports native search indexability, but repeated full-page reloads increase bandwidth usage and cause visual flickering.

In contrast, the Angular administrative SPA downloads compiled JavaScript, HTML, and CSS bundles upfront, delegating routing and rendering to the client browser. View components swap dynamically inside <router-outlet> while exchanging only raw JSON data with the backend. This increases initial client memory and CPU usage, but eliminates redundant network payloads, maintains local application state, and delivers an uninterrupted user experience.

### Why did the backend use a NoSQL MongoDB database?
MongoDB was chosen because its document-oriented model aligns directly with the semi-structured, nested nature of travel itineraries without requiring complex table joins. Operating within the MEAN stack provides native data continuity. MongoDB’s dynamic schema accommodates evolving document attributes without the schema migration overhead or table-locking constraints seen in relational databases.

## Functionality
### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a static, language-agnostic text serialization format. It does not feature executable code, functions, or comments. JavaScript is a full programming language that executes logic, manipulates memory, and manages application flow.

In a decoupled architecture, JSON serves as the neutral communication contract. Because it is strictly a static data format incapable of executing code or functions, it is generally safe for network transmission, particularly when coupled with client-side validation, secure API routing, and Mongoose schema enforcement. The Express backend queries MongoDB and serializes records into JSON text, which the Angular client consumes asynchronously via HttpClient and deserializes into typed TypeScript models. This cleanly decouples presentation logic from server runtimes and database implementations.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Presentation code was refactored by isolating individual card markup from TripListingComponent into a standalone TripCardComponent, removing template duplication. In the data tier, scattered component-level HTTP requests were consolidated into an injectable TripDataService, standardizing endpoint paths and enabling centralized JWT injection via an HTTP interceptor.

Reusable UI components isolate scoped styles to prevent CSS leakage, centralize maintenance so layout adjustments apply globally from a single file, and simplify unit testing by decoupling components from broader view dependencies.


## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
RESTful methods define explicit endpoint actions: GET reads data without side effects, POST creates resources, PUT updates existing records by identifier, and DELETE removes persistent documents. Testing with Postman validates status codes (200 OK, 400 Bad Request) and response schemas before frontend integration.

Securing administrative routes (POST, PUT) with Passport and JSON Web Tokens requires multi-step testing workflows. Testers must authenticate via POST /api/login, extract the signed token, and inject a Bearer <token> Authorization header to verify that authorized updates succeed while missing, malformed, or expired tokens consistently trigger HTTP 401 Unauthorized errors. Client-side testing verifies that the Angular interceptor automatically attaches the stored token and gracefully handles authorization rejections.

Validating the application within the browser and utilizing developer tools complements the API testing by allowing real-time inspection of outgoing request headers, verification of returned JSON payloads in the Network tab and monitoring the Console for client-side runtime errors. Angular's reactive data binding assisted with reflecting state changes in real time without requiring a page refresh.


## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course provided hands-on experience designing and securing an end-to-end decoupled MEAN application, reinforcing core enterprise competencies:
I evaluated system trade-offs between server-side MVC and client-side SPA architectures. I built Angular interfaces with reactive forms, client-sided routing and RxJS observables. I implemented RESTful endpoints in Express and modeled document structures with MongoDB and Mongoose. I enforced authentication pipelines. I tested REST contracts with Postman and tracked network requests.
