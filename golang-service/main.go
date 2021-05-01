package main

import (
	"fmt"
	"go-service/proto"
	"go-service/task"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 9000))
	if err != nil {
		log.Fatalf("Failed to listen on port 9000: %v", err)
	}

	taskServer := task.Server{}

	grpcServer := grpc.NewServer()

	proto.RegisterTaskServiceServer(grpcServer, &taskServer)

	fmt.Println("Go running on port 9000")

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve gRPC server over port 9000: %v", err)
	}
}
