FROM openjdk:11-jre-slim

# Set working directory
WORKDIR /app

# Copy the JAR file
COPY target/customer-master-1.0.0.jar app.jar

# Create directories for uploads
RUN mkdir -p /app/customer-portal-uploads

# Expose port
EXPOSE 9092

# Set timezone
ENV TZ=Asia/Kolkata

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:9092/actuator/health || exit 1

# Run the application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]