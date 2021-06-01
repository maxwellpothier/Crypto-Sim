package main.Server;

import main.Server.Handlers.*;
import java.io.IOException;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpServer;

public class Server {
  public static void main(String[] args) throws IOException {
    int port = 8080;
    new Server().startServer(port);
  }

  private void startServer(int port) throws IOException {
    InetSocketAddress serverAddress = new InetSocketAddress(port);
    HttpServer server = HttpServer.create(serverAddress, 10);
    registerHandlers(server);
    server.start();
    System.out.println("Crypto Sim server listening on port " + port);
  }

  private void registerHandlers(HttpServer server) {
    server.createContext("/", new FileRequestHandler());
  }
}