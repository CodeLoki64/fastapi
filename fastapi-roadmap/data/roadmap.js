export const ROADMAP = [
  {
    tier: "beginner",
    label: "Foundation",
    nodes: [
      {
        id: "fastapi",
        title: "FastAPI",
        subtitle: "Python web framework",
        desc: "FastAPI is a modern, high-performance Python web framework for building APIs. It is built on top of Starlette and Pydantic, supports async natively, and auto-generates interactive API documentation from your code. It's one of the fastest Python frameworks available.",
        resources: [
          { tag: "doc", name: "FastAPI official documentation", url: "https://fastapi.tiangolo.com" },
          { tag: "video", name: "FastAPI full course – freeCodeCamp", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA" },
          { tag: "article", name: "FastAPI introduction – Real Python", url: "https://realpython.com/fastapi-python-web-apis/" },
        ],
      },
      {
        id: "python",
        title: "Python prerequisites",
        subtitle: "Types, async, decorators",
        desc: "Before diving into FastAPI you need a solid grasp of Python type hints, async/await, decorators, list comprehensions, and how to work with virtual environments. These foundations make FastAPI's patterns intuitive rather than magical.",
        resources: [
          { tag: "doc", name: "Python type hints – official docs", url: "https://docs.python.org/3/library/typing.html" },
          { tag: "article", name: "Async IO in Python – Real Python", url: "https://realpython.com/async-io-python/" },
          { tag: "video", name: "Python for beginners – freeCodeCamp", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
        ],
      },
      {
        id: "setup",
        title: "Installation & setup",
        subtitle: "venv, pip, first app",
        desc: "Install FastAPI and Uvicorn (the ASGI server) with pip inside a virtual environment. Write your first app with a single route and run it locally. Understanding the dev-reload workflow with `uvicorn main:app --reload` will save you a lot of time.",
        resources: [
          { tag: "doc", name: "FastAPI – first steps guide", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
          { tag: "video", name: "FastAPI setup in 10 minutes", url: "https://www.youtube.com/watch?v=SORiTsvnU28" },
          { tag: "article", name: "Python virtual environments – Real Python", url: "https://realpython.com/python-virtual-environments-a-primer/" },
        ],
      },
      {
        id: "structure",
        title: "Project structure",
        subtitle: "Folders, modules, APIRouter",
        desc: "A well-organized FastAPI project separates routers, models, schemas, services, and configuration into distinct modules. Using `APIRouter` lets you split endpoints into multiple files and mount them all in a single `main.py`.",
        resources: [
          { tag: "doc", name: "Bigger applications – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/bigger-applications/" },
          { tag: "article", name: "FastAPI best practices – GitHub", url: "https://github.com/zhanymkanov/fastapi-best-practices" },
          { tag: "video", name: "FastAPI project structure walkthrough", url: "https://www.youtube.com/watch?v=1SSPPE6uE_s" },
        ],
      },
      {
        id: "routing",
        title: "Path operations",
        subtitle: "GET, POST, PUT, DELETE",
        desc: "Path operations are the core of FastAPI — decorators like `@app.get()`, `@app.post()`, `@app.put()`, `@app.delete()` map HTTP methods to Python functions. FastAPI reads the function signature to know what parameters to extract.",
        resources: [
          { tag: "doc", name: "Path operation functions – FastAPI", url: "https://fastapi.tiangolo.com/tutorial/path-operation-configuration/" },
          { tag: "article", name: "CRUD operations with FastAPI", url: "https://fastapi.tiangolo.com/tutorial/sql-databases/" },
        ],
      },
      {
        id: "path",
        title: "Path parameters",
        subtitle: "Dynamic URL segments",
        desc: "Path parameters are variable parts of the URL, like `/items/{item_id}`. FastAPI automatically casts them to the declared Python type (e.g. int, str, UUID) and validates them before the function even runs.",
        resources: [
          { tag: "doc", name: "Path parameters – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/path-params/" },
          { tag: "doc", name: "Numeric validation for path params", url: "https://fastapi.tiangolo.com/tutorial/path-params-numeric-validations/" },
        ],
      },
      {
        id: "query",
        title: "Query parameters",
        subtitle: "Optional & required filters",
        desc: "Query parameters appear after `?` in the URL (e.g. `/items?skip=0&limit=10`). Declaring them as function arguments with default values makes them optional; without a default they become required.",
        resources: [
          { tag: "doc", name: "Query parameters – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/query-params/" },
          { tag: "doc", name: "Query parameter string validations", url: "https://fastapi.tiangolo.com/tutorial/query-params-str-validations/" },
        ],
      },
      {
        id: "body",
        title: "Request body",
        subtitle: "JSON payloads via Pydantic",
        desc: "Declare a Pydantic model as the type annotation for a parameter and FastAPI expects it as a JSON request body. It validates, parses, and documents the shape of the body automatically.",
        resources: [
          { tag: "doc", name: "Request body – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/body/" },
          { tag: "doc", name: "Body with multiple parameters", url: "https://fastapi.tiangolo.com/tutorial/body-multiple-params/" },
        ],
      },
      {
        id: "response",
        title: "Response models",
        subtitle: "Output schemas & filtering",
        desc: "Use `response_model=` in your decorator to control what gets serialized and returned. This lets you expose a `UserOut` schema that hides sensitive fields like `password` even if your function returns a full `User` object.",
        resources: [
          { tag: "doc", name: "Response model – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/response-model/" },
          { tag: "doc", name: "Additional response types", url: "https://fastapi.tiangolo.com/advanced/additional-responses/" },
        ],
      },
      {
        id: "pydantic",
        title: "Pydantic models",
        subtitle: "Validation & data schemas",
        desc: "Pydantic is FastAPI's validation engine. Define data shapes as Python classes with type annotations; Pydantic coerces and validates inputs at runtime, raising clear errors for invalid data. FastAPI v2 uses Pydantic v2 which is dramatically faster.",
        resources: [
          { tag: "doc", name: "Pydantic v2 documentation", url: "https://docs.pydantic.dev/" },
          { tag: "doc", name: "Pydantic schema examples in FastAPI", url: "https://fastapi.tiangolo.com/tutorial/schema-extra-example/" },
          { tag: "video", name: "Pydantic crash course", url: "https://www.youtube.com/watch?v=XIdQ6gO3Anc" },
        ],
      },
    ],
  },
  {
    tier: "intermediate",
    label: "Core skills",
    nodes: [
      {
        id: "di",
        title: "Dependency injection",
        subtitle: "Depends(), reusable logic",
        desc: "`Depends()` is FastAPI's DI system. Inject reusable logic — DB sessions, auth checks, pagination — into routes without repeating code. Dependencies can depend on other dependencies, forming a tree FastAPI resolves automatically.",
        resources: [
          { tag: "doc", name: "Dependencies – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/dependencies/" },
          { tag: "article", name: "FastAPI dependency injection patterns", url: "https://camillovisini.com/coding/abstracting-fastapi-services/" },
          { tag: "video", name: "FastAPI Depends explained", url: "https://www.youtube.com/watch?v=pQEVxWkqVac" },
        ],
      },
      {
        id: "auth",
        title: "Authentication",
        subtitle: "OAuth2, JWT, API keys",
        desc: "FastAPI supports OAuth2 with Password flow out of the box, plus JWT token creation/verification via python-jose. You can also implement API key auth, HTTP Basic, or hook into third-party providers like Auth0.",
        resources: [
          { tag: "doc", name: "Security – OAuth2 JWT – FastAPI", url: "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/" },
          { tag: "article", name: "JWT auth in FastAPI – TestDriven.io", url: "https://testdriven.io/blog/fastapi-jwt-auth/" },
          { tag: "video", name: "Auth with FastAPI – Amigoscode", url: "https://www.youtube.com/watch?v=5GxQ1rLTwaU" },
        ],
      },
      {
        id: "middleware",
        title: "Middleware",
        subtitle: "Request/response hooks",
        desc: "Middleware wraps every request and response, letting you add logging, timing, CORS headers, compression, or custom auth before a request reaches any route handler. FastAPI uses Starlette middleware under the hood.",
        resources: [
          { tag: "doc", name: "Middleware – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/middleware/" },
          { tag: "doc", name: "CORS middleware setup", url: "https://fastapi.tiangolo.com/tutorial/cors/" },
          { tag: "article", name: "Starlette middleware reference", url: "https://www.starlette.io/middleware/" },
        ],
      },
      {
        id: "errors",
        title: "Error handling",
        subtitle: "HTTPException, custom handlers",
        desc: "Raise `HTTPException` for HTTP errors. Register custom exception handlers with `@app.exception_handler()` to return consistent error JSON. Pydantic validation errors are also caught and formatted by default.",
        resources: [
          { tag: "doc", name: "Error handling – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/handling-errors/" },
          { tag: "article", name: "Custom exception handlers pattern", url: "https://medium.com/@nhannguyennp/exception-handling-in-fastapi-46a8a7f97fc7" },
        ],
      },
      {
        id: "database",
        title: "Database integration",
        subtitle: "SQLAlchemy, async ORM",
        desc: "FastAPI works with any database. The most common patterns are SQLAlchemy (sync or async with AsyncSession + asyncpg), or Tortoise ORM for async-first approaches. Alembic handles schema migrations.",
        resources: [
          { tag: "doc", name: "SQL databases – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/sql-databases/" },
          { tag: "article", name: "Async SQLAlchemy with FastAPI", url: "https://testdriven.io/blog/fastapi-sqlmodel/" },
          { tag: "video", name: "FastAPI + PostgreSQL full tutorial", url: "https://www.youtube.com/watch?v=398tFKUiSoI" },
        ],
      },
      {
        id: "files",
        title: "File uploads",
        subtitle: "UploadFile, form data",
        desc: "Use `UploadFile` and `File()` to accept multipart form uploads. You can stream large files to disk or cloud storage without loading them fully into memory. Multiple files per request are supported.",
        resources: [
          { tag: "doc", name: "Request files – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/request-files/" },
          { tag: "doc", name: "File + form data together", url: "https://fastapi.tiangolo.com/tutorial/request-forms-and-files/" },
        ],
      },
      {
        id: "testing",
        title: "Testing",
        subtitle: "pytest, TestClient",
        desc: "`TestClient` (wrapping httpx) lets you write synchronous tests against your async FastAPI app. Override dependencies via `app.dependency_overrides` to swap real DBs for mocks in tests. pytest fixtures keep things clean.",
        resources: [
          { tag: "doc", name: "Testing – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/testing/" },
          { tag: "article", name: "FastAPI testing guide – TestDriven.io", url: "https://testdriven.io/blog/fastapi-testing/" },
          { tag: "video", name: "Testing FastAPI with pytest", url: "https://www.youtube.com/watch?v=WkMWA5bj5PQ" },
        ],
      },
    ],
  },
  {
    tier: "advanced",
    label: "Production",
    nodes: [
      {
        id: "websockets",
        title: "WebSockets",
        subtitle: "Real-time connections",
        desc: "FastAPI supports WebSocket connections natively via `@app.websocket()`. You can accept connections, send and receive messages in a loop, and broadcast to multiple clients using a ConnectionManager pattern.",
        resources: [
          { tag: "doc", name: "WebSockets – FastAPI docs", url: "https://fastapi.tiangolo.com/advanced/websockets/" },
          { tag: "article", name: "Build a chat app with FastAPI WebSockets", url: "https://testdriven.io/blog/fastapi-websockets/" },
          { tag: "video", name: "FastAPI WebSocket tutorial", url: "https://www.youtube.com/watch?v=ZxMnN_G9jSU" },
        ],
      },
      {
        id: "background",
        title: "Background tasks",
        subtitle: "Async, Celery, ARQ",
        desc: "FastAPI's `BackgroundTasks` runs functions after the response is sent — great for emails or logging. For heavier work, integrate Celery with Redis/RabbitMQ as a broker, or use `ARQ` for async Redis queues.",
        resources: [
          { tag: "doc", name: "Background tasks – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/background-tasks/" },
          { tag: "article", name: "Celery + FastAPI integration", url: "https://testdriven.io/blog/fastapi-and-celery/" },
          { tag: "article", name: "ARQ async task queue docs", url: "https://arq-docs.helpmanual.io/" },
        ],
      },
      {
        id: "caching",
        title: "Caching",
        subtitle: "Redis, in-memory strategies",
        desc: "Cache expensive query results with Redis using aioredis or redis-py in async mode. Libraries like `fastapi-cache2` add decorator-based caching with TTL support. In-memory caching with `cachetools` works for single-process apps.",
        resources: [
          { tag: "article", name: "FastAPI caching with Redis", url: "https://medium.com/@andrei.nata.ionescu/api-caching-in-fastapi-3e0c4e695b1" },
          { tag: "doc", name: "fastapi-cache2 library – GitHub", url: "https://github.com/long2ice/fastapi-cache" },
          { tag: "article", name: "Redis with Python – Real Python", url: "https://realpython.com/python-redis/" },
        ],
      },
      {
        id: "security",
        title: "Security",
        subtitle: "CORS, rate limiting, HTTPS",
        desc: "Enable CORS only for trusted origins. Use HTTPS in production. Implement rate limiting with `slowapi`. Sanitize inputs, avoid mass assignment vulnerabilities, set secure cookie flags, and keep dependencies updated.",
        resources: [
          { tag: "doc", name: "Security overview – FastAPI docs", url: "https://fastapi.tiangolo.com/tutorial/security/" },
          { tag: "article", name: "Rate limiting in FastAPI with slowapi", url: "https://slowapi.readthedocs.io/" },
          { tag: "article", name: "OWASP API security top 10", url: "https://owasp.org/www-project-api-security/" },
        ],
      },
      {
        id: "openapi",
        title: "OpenAPI & auto docs",
        subtitle: "Swagger, ReDoc, schema",
        desc: "FastAPI auto-generates an OpenAPI 3.x schema from your code. The interactive Swagger UI is at `/docs` and ReDoc at `/redoc`. You can extend the schema with `openapi_extra`, add tags, descriptions, and custom responses.",
        resources: [
          { tag: "doc", name: "OpenAPI metadata – FastAPI", url: "https://fastapi.tiangolo.com/tutorial/metadata/" },
          { tag: "doc", name: "Extending OpenAPI schema", url: "https://fastapi.tiangolo.com/how-to/extending-openapi/" },
          { tag: "article", name: "Custom Swagger UI assets", url: "https://fastapi.tiangolo.com/advanced/custom-docs-ui-assets/" },
        ],
      },
      {
        id: "deploy",
        title: "Deployment",
        subtitle: "Docker, Uvicorn, cloud",
        desc: "Run FastAPI with Uvicorn (single process) or Gunicorn + Uvicorn workers for multi-core production. Containerize with Docker. Deploy to Render, Railway, Fly.io, AWS ECS, GCP Cloud Run, or Azure Container Apps.",
        resources: [
          { tag: "doc", name: "Deployment concepts – FastAPI docs", url: "https://fastapi.tiangolo.com/deployment/" },
          { tag: "article", name: "Dockerizing FastAPI – TestDriven.io", url: "https://testdriven.io/blog/fastapi-docker-traefik/" },
          { tag: "video", name: "Deploy FastAPI on Docker + AWS", url: "https://www.youtube.com/watch?v=nhNHRNfAGFo" },
        ],
      },
      {
        id: "microservices",
        title: "Microservices patterns",
        subtitle: "gRPC, events, API gateway",
        desc: "At scale, split your FastAPI app into services communicating via REST or gRPC. Use an API gateway (Kong, Traefik). Adopt event-driven patterns with Kafka or RabbitMQ. Implement distributed tracing with OpenTelemetry.",
        resources: [
          { tag: "article", name: "FastAPI microservices architecture", url: "https://testdriven.io/blog/moving-from-flask-to-fastapi/" },
          { tag: "article", name: "gRPC with Python and FastAPI", url: "https://medium.com/@pankaj_pandey/grpc-with-python-fastapi-7a33b9e2a6a2" },
          { tag: "video", name: "Microservices with FastAPI – ArjanCodes", url: "https://www.youtube.com/watch?v=Cy9fAvsXGZA" },
          { tag: "doc", name: "OpenTelemetry Python docs", url: "https://opentelemetry.io/docs/languages/python/" },
        ],
      },
    ],
  },
];
