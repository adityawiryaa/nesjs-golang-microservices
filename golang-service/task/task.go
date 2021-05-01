package task

import (
	"context"
	"go-service/proto"
	"log"

	"github.com/rs/xid"
)

var (
	guid = xid.New()
)

type Server struct {
}

func (s *Server) CreateTask(ctx context.Context, request *proto.Request) (*proto.Response, error) {
	return &proto.Response{
		Id:   guid.Counter(),
		Name: request.Name,
		Desc: request.Desc,
	}, nil
}

func (s *Server) GetTask(request *proto.Empty, stream proto.TaskService_GetTaskServer) error {

	var (
		limitBatching = 1000
		datas         []*proto.Response
	)

	for i := 1; i < 1000000; i++ {
		queries := []*proto.Response{{
			Id:   guid.Counter(),
			Name: "data",
			Desc: "desc",
		}}
		datas = append(datas, queries...)
		if len(datas) >= limitBatching {
			data := &proto.ResponseData{Data: datas}
			err := stream.Send(data)
			if err != nil {
				log.Printf("send error %v", err)
			}
			datas = []*proto.Response{}
		}
	}

	return nil
}

func data() (datas []*proto.Response) {

	return datas
}
