# NestJS Project

## My Learnings Till First Commit

### Basic NestJS Folder Setup
- Established the basic folder structure for a NestJS project.
- Created the initial modules, controllers, and services.

### Implemented Controllers and Services Setup
- Developed and organized controllers to handle incoming requests.
- Created services to encapsulate business logic and interact with data sources.

### Implemented Validation of DTOs for Payload
- Utilized Data Transfer Objects (DTOs) to ensure data consistency.
- Implemented validation rules for DTOs to validate incoming request payloads.

### Implemented Middleware for All Routes in Three Different Ways
- Created custom middleware to handle various pre-processing tasks.
- Applied middleware globally, per-module, and per-route.
- Explored different approaches to integrate middleware in the application.

### Configured Middleware Using the `configure` Method in Modules
- Learned how to use the `configure` method in modules to set up middleware.
- Applied middleware configuration to streamline request handling across modules.

## My Learnings Till Second Commit

### Injecting Providers in NestJS
- **useClass Providers:** Learned to inject providers using the `useClass` syntax.
- **useValue Providers for Replacing Actual Service with MockService:** Used the `useValue` method to replace real services with mock implementations.
- **useFactory Method for Dynamic Value Assignment:** Implemented the `useFactory` method to assign dynamic values to providers.
- **Standard Providers Initiated by Class Providers:** Worked with standard providers initialized using class providers.
- **Non Class-Based Providers with Token Injection:** Learned to inject non class-based providers using tokens.
- **Non Service Provider Using useFactory:** Utilized `useFactory` for non-service providers.