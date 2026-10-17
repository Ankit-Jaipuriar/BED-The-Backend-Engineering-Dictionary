const terms = [
  {
    term: "Abstraction",
    group: "Ab",
    pronunciation: "/æbˈstræk.ʃən/",
    type: "noun",
    definition: "The practice of hiding unnecessary implementation details and showing only what is needed to use something.",
    example: "A person can send an email without knowing how mail servers route the message.",
    related: ["Interface", "Encapsulation"]
  },
  {
    term: "Access Modifier",
    group: "Ac",
    pronunciation: "/ˈæk.ses ˈmɒd.ɪ.faɪ.ər/",
    type: "noun",
    definition: "A language feature that controls where a class, method, or field can be accessed from.",
    example: "A private field can be read only by code inside the same class.",
    related: ["Encapsulation", "Class"]
  },
  {
    term: "ACID Properties",
    group: "Ac",
    pronunciation: "/ˈæs.ɪd ˈprɒp.ər.tiz/",
    type: "noun",
    definition: "Four guarantees that make database transactions reliable: atomicity, consistency, isolation, and durability.",
    example: "A bank transfer should never deduct money from one account without adding it to the other.",
    related: ["Transaction", "Database"]
  },
  {
    term: "Adapter Pattern",
    group: "Ad",
    pronunciation: "/əˈdæp.tər ˈpæt.ən/",
    type: "noun",
    definition: "A design pattern that lets incompatible interfaces work together by translating one form into another.",
    example: "A travel plug adapter lets a device designed for one socket type work with another.",
    related: ["Interface", "Design Pattern"]
  },
  {
    term: "API",
    group: "Ap",
    pronunciation: "/ˌeɪ.piːˈaɪ/",
    type: "noun",
    definition: "A defined way for one software system to request data or actions from another system.",
    example: "A weather app calls an API to retrieve the latest forecast.",
    related: ["Endpoint", "REST API"]
  },
  {
    term: "API Gateway",
    group: "Ap",
    pronunciation: "/ˌeɪ.piːˈaɪ ˈɡeɪ.weɪ/",
    type: "noun",
    definition: "A single entry point that receives client requests and routes them to the appropriate backend services.",
    example: "A mobile app calls one gateway, which then contacts account, order, and payment services.",
    related: ["Microservices", "Reverse Proxy"]
  },
  {
    term: "Asynchronous Processing",
    group: "As",
    pronunciation: "/eɪˈsɪŋ.krə.nəs ˈprəʊ.ses.ɪŋ/",
    type: "noun",
    definition: "Starting work without waiting for it to finish before continuing with other work.",
    example: "A website accepts an uploaded video immediately and processes it in the background.",
    related: ["Kafka", "Queue"]
  },
  {
    term: "Authentication",
    group: "Au",
    pronunciation: "/ɔːˌθen.tɪˈkeɪ.ʃən/",
    type: "noun",
    definition: "The process of verifying who a user or system is.",
    example: "Signing in with a password and one-time code authenticates a user.",
    related: ["Authorization", "Token"]
  },
  {
    term: "Authorization",
    group: "Au",
    pronunciation: "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
    type: "noun",
    definition: "The process of deciding what an authenticated user or system is allowed to do.",
    example: "An administrator may delete users while a regular user may only view their own profile.",
    related: ["Authentication", "Role Based Access Control"]
  },
  {
    term: "Backend",
    group: "Ba",
    pronunciation: "/ˈbæk.end/",
    type: "noun",
    definition: "The server-side part of an application that contains business logic, data access, and integrations.",
    example: "When a customer places an order, the backend validates payment and stores the order.",
    related: ["Frontend", "API"]
  },
  {
    term: "Bean",
    group: "Be",
    pronunciation: "/biːn/",
    type: "noun",
    definition: "An object created and managed by a framework container, commonly used in Spring applications.",
    example: "A service object can be created once by the application and injected wherever it is needed.",
    related: ["Dependency Injection", "Spring Boot"]
  },
  {
    term: "Cache",
    group: "Ca",
    pronunciation: "/kæʃ/",
    type: "noun",
    definition: "A fast temporary store that keeps frequently used data close to the application.",
    example: "A website may cache a popular product list instead of querying the database for every visitor.",
    related: ["Redis", "Latency"]
  },
  {
    term: "Class",
    group: "Cl",
    pronunciation: "/klɑːs/",
    type: "noun",
    definition: "A blueprint that defines the data and behavior shared by objects of the same kind.",
    example: "A Car class can define properties such as color and behavior such as start.",
    related: ["Object", "Encapsulation"]
  },
  {
    term: "Concurrency",
    group: "Co",
    pronunciation: "/kənˈkʌr.ən.si/",
    type: "noun",
    definition: "The ability of a system to handle multiple operations during the same period of time.",
    example: "A ticket-booking system processes many seat-selection requests at the same time.",
    related: ["Lock", "Race Condition"]
  },
  {
    term: "Connection Pool",
    group: "Co",
    pronunciation: "/kəˈnek.ʃən puːl/",
    type: "noun",
    definition: "A reusable collection of database connections maintained so the application does not create a new connection for every request.",
    example: "A busy application reuses open database connections to reduce delay and overhead.",
    related: ["Database", "Performance"]
  },
  {
    term: "Consumer",
    group: "Co",
    pronunciation: "/kənˈsjuː.mər/",
    type: "noun",
    definition: "A program component that reads and processes messages from a queue or event stream.",
    example: "A shipping service consumes order events and creates delivery requests.",
    related: ["Producer", "Kafka"]
  },
  {
    term: "Database",
    group: "Da",
    pronunciation: "/ˈdeɪ.tə.beɪs/",
    type: "noun",
    definition: "An organized system for storing, retrieving, and managing data.",
    example: "An online store keeps customer, product, and order information in a database.",
    related: ["SQL", "Transaction"]
  },
  {
    term: "Data Transfer Object",
    group: "Da",
    pronunciation: "/ˈdeɪ.tə ˈtræns.fɜːr ˈɒb.dʒekt/",
    type: "noun",
    definition: "A simple object used to carry data between parts of an application or across a network.",
    example: "A registration form can be converted into a data transfer object before it is sent to the server.",
    related: ["API", "Serialization"]
  },
  {
    term: "Dead Letter Queue",
    group: "De",
    pronunciation: "/ded ˈlet.ər kjuː/",
    type: "noun",
    definition: "A separate queue that stores messages which could not be processed successfully after retries.",
    example: "A malformed order message is moved aside so it does not repeatedly block normal orders.",
    related: ["Retry", "Kafka"]
  },
  {
    term: "Dependency Injection",
    group: "De",
    pronunciation: "/dɪˈpen.dən.si ɪnˈdʒek.ʃən/",
    type: "noun",
    definition: "Providing an object with the services it needs from outside, instead of making it create them itself.",
    example: "A service receives a database repository through its constructor rather than creating the repository directly.",
    related: ["Bean", "Inversion of Control"]
  },
  {
    term: "Endpoint",
    group: "En",
    pronunciation: "/ˈend.pɔɪnt/",
    type: "noun",
    definition: "A specific URL where an API accepts requests or returns information.",
    example: "A shopping application may expose an endpoint to retrieve a product by its ID.",
    related: ["API", "HTTP"]
  },
  {
    term: "Event Driven Architecture",
    group: "Ev",
    pronunciation: "/ɪˈvent ˈdrɪv.ən ˈɑː.kɪ.tek.tʃər/",
    type: "noun",
    definition: "A system design in which components communicate by publishing and reacting to events.",
    example: "After an order is placed, separate systems independently update inventory and notify the customer.",
    related: ["Kafka", "Producer", "Consumer"]
  },
  {
    term: "Idempotency",
    group: "Id",
    pronunciation: "/ˌaɪ.dəmˈpoʊ.tən.si/",
    type: "noun",
    definition: "A property where repeating the same operation produces the same final result as performing it once.",
    example: "Submitting the same payment request twice should not charge the customer twice.",
    related: ["Retry", "Distributed Systems"]
  },
  {
    term: "Kafka",
    group: "Ka",
    pronunciation: "/ˈkæf.kə/",
    type: "noun",
    definition: "A distributed event-streaming platform used to publish, store, and consume messages asynchronously.",
    example: "An online store publishes an order event that payment, inventory, and notification services can process.",
    related: ["Consumer", "Producer", "Topic"]
  },
  {
    term: "Microservices",
    group: "Mi",
    pronunciation: "/ˈmaɪ.krəʊˌsɜː.vɪ.sɪz/",
    type: "plural noun",
    definition: "An architectural style that divides an application into small, independently deployable services.",
    example: "An application may have separate services for accounts, payments, deliveries, and notifications.",
    related: ["API Gateway", "Distributed Systems"]
  },
  {
    term: "Optimistic Locking",
    group: "Op",
    pronunciation: "/ˌɒp.tɪˈmɪs.tɪk ˈlɒk.ɪŋ/",
    type: "noun",
    definition: "A method of preventing conflicting updates by checking whether a record changed before saving it.",
    example: "A profile update is rejected if somebody else saved a newer version first.",
    related: ["Concurrency", "Transaction"]
  },
  {
    term: "Producer",
    group: "Pr",
    pronunciation: "/prəˈdjuː.sər/",
    type: "noun",
    definition: "A program component that sends messages to a queue or event stream.",
    example: "A checkout service publishes an order-created message after a purchase succeeds.",
    related: ["Consumer", "Kafka"]
  },
  {
    term: "Race Condition",
    group: "Ra",
    pronunciation: "/reɪs kənˈdɪʃ.ən/",
    type: "noun",
    definition: "An error that occurs when the result depends on the unpredictable timing of simultaneous operations.",
    example: "Two shoppers try to buy the last item at the same moment and both are told it is available.",
    related: ["Concurrency", "Lock"]
  },
  {
    term: "REST API",
    group: "Re",
    pronunciation: "/rest ˌeɪ.piːˈaɪ/",
    type: "noun",
    definition: "A web API style that uses HTTP methods and resource-oriented URLs.",
    example: "A client may use GET to read a product and POST to create an order.",
    related: ["API", "Endpoint"]
  },
  {
    term: "Retry",
    group: "Re",
    pronunciation: "/ˌriːˈtraɪ/",
    type: "noun",
    definition: "An attempt to perform an operation again after a temporary failure.",
    example: "An application may retry a request after a short network interruption.",
    related: ["Idempotency", "Dead Letter Queue"]
  },
  {
    term: "Scalability",
    group: "Sc",
    pronunciation: "/ˌskeɪ.ləˈbɪl.ə.ti/",
    type: "noun",
    definition: "The ability of a system to continue working well as users, data, or traffic increase.",
    example: "A service can scale by adding more servers when demand grows.",
    related: ["Load Balancer", "Performance"]
  },
  {
    term: "Serialization",
    group: "Se",
    pronunciation: "/ˌsɪə.ri.ə.laɪˈzeɪ.ʃən/",
    type: "noun",
    definition: "Converting an object into a transferable format such as JSON, XML, or Avro.",
    example: "A program serializes an order object into JSON before sending it through an API.",
    related: ["Avro", "Data Transfer Object"]
  },
  {
    term: "Transaction",
    group: "Tr",
    pronunciation: "/trænˈzæk.ʃən/",
    type: "noun",
    definition: "A group of database operations treated as one unit of work.",
    example: "Creating an order and reducing stock can be completed together in one transaction.",
    related: ["ACID Properties", "Rollback"]
  },
  {
    term: "Transactional Persistence",
    group: "Tr",
    pronunciation: "/trænˈzæk.ʃən.əl pərˈsɪs.təns/",
    type: "noun",
    definition: "Saving related data changes as one unit so that all changes succeed together or none are saved.",
    example: "A money transfer must deduct from one account and add to another as a single operation.",
    related: ["Transaction", "Database"]
  }
];
