# Use official OpenJDK image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built jar file to the container
COPY target/my-order-app.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
