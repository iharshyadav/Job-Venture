// @ts-nocheck
class PeerService {
    peer: any;
    constructor() {
          this.peer = new RTCPeerConnection({
            iceServers: [
              {
                urls: [
                  "stun:stun.l.google.com:19302",
                  "stun:global.stun.twilio.com:3478",
                ],
              },
            ],
          });
      }

      async getAnswer(offer:any) {
        if (this.peer) {
          await this.peer.setRemoteDescription(offer);
          const ans = await this.peer.createAnswer();
          await this.peer.setLocalDescription(new RTCSessionDescription(ans));
          return ans;
        }
      }
    
      async setLocalDescription(ans:any) {
        if (this.peer) {
          await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
        }
      }
    async getOffer() {
      if (this.peer) {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(new RTCSessionDescription(offer));
        return offer;
      }
    }
  replaceTrack(oldTrack: MediaStreamTrack, newTrack: MediaStreamTrack, stream: MediaStream) {
    const sender = this.peer.getSenders().find((s:any) => s.track === oldTrack);
    if (sender) {
      sender.replaceTrack(newTrack);
    }
    stream.removeTrack(oldTrack);
    stream.addTrack(newTrack);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PeerService();