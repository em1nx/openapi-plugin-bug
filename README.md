
# Environment

OS: maxOS Catalina 10.15.7
WebStorm: 2020.3
OpenAPI Specification Plugin: 203.5981.152
Docker Desktop: 2.5.0.1 (49550)

# Steps to reproduce

1. Run `docker-compose up` in root directory.
2. Open file `app/openapi.spec.yaml` in "Editor and preview" mode. 
3. Open / route and hit "Try it out" button.
4. Hit "Execute" button. 

Expected behaviour: Valid response with greeting "Hello world".    

Actual behaviour: Got Error `TypeError: Failed to fetch`.
