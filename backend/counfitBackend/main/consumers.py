import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import base64

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()  # No need for room groups in this scenario

        # Send a welcome message (optional)
        self.send(text_data=json.dumps({
            'type': 'connection_established',
            'message': 'You are now connected!'
        }))

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        if text_data_json['type'] == 'video_frame':
            frame_data = base64.b64decode(text_data_json['data'])

            print('Received frame:', frame_data)  # Log received frame data

            # Process frame data here (optional)

            # Broadcast the frame to all connected clients (optional)
            # async_to_sync(self.channel_layer.group_send)(
            #     self.room_group_name,  # Remove if not using groups
            #     {
            #         'type': 'broadcast_video_frame',
            #         'frame_data': frame_data
            #     }
            # )

    def disconnect(self, close_code):
        pass