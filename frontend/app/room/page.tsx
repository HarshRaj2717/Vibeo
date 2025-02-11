"use client";
import { useState } from "react";

function JoinForm({
  setName: setNameExt,
  setRoomCode: setRoomCodeExt,
}: {
  name: string;
  setName: (name: string) => void;
  roomCode: string;
  setRoomCode: (roomCode: string) => void;
}) {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  function handleJoinRoom(e: React.FormEvent<HTMLDivElement>) {
    // Join room using API here...
    e.preventDefault();

    if (name === "" || roomCode === "") {
      return;
    }
    setNameExt(name);
    setRoomCodeExt(roomCode);
  }

  function handleCreateRoom(e: React.FormEvent<HTMLButtonElement>) {
    // create room using API here...
    e.preventDefault();

    if (name === "") {
      return;
    }
    setNameExt(name);
    setRoomCodeExt(Math.random().toString(36).substring(6));
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              Join or Create a room to start watching videos with your friends.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Room Code</span>
                </label>
                <input
                  type="password"
                  placeholder="room code"
                  className="input input-bordered"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <div className="btn btn-primary" onClick={handleJoinRoom}>
                  Join Room
                </div>
              </div>
              <div className="divider">or</div>
              <div className="form-control mb-6">
                <button
                  className="btn btn-outline tooltip tooltip-accent tooltip-open tooltip-bottom"
                  data-tip="No Room Code Needed"
                  onClick={handleCreateRoom}
                >
                  Create Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoForm({
  setvideoFile: setvideoFileExt,
  setsubtitlesFile: setsubtitlesFileExt,
}: {
  setvideoFile: (videoFile: File) => void;
  setsubtitlesFile: (subtitlesFile: File | null) => void;
}) {
  const [videoFile, setvideoFile] = useState<File | null>(null);
  const [subtitlesFile, setsubtitlesFile] = useState<File | null>(null);

  function handleEnter(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();

    if (videoFile === null) {
      return;
    }

    setsubtitlesFileExt(subtitlesFile);
    setvideoFileExt(videoFile);
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Joined!</h1>
            <p className="py-6">Select the video to enter room and play.</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Video File</span>
                </label>
                <input
                  type="file"
                  accept="video/*"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setvideoFile(e.target.files[0]);
                    }
                  }}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subtitle File</span>
                  <span className="label-text-alt">(Optional)</span>
                </label>
                <input
                  type="file"
                  accept=".vtt"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setsubtitlesFile(e.target.files[0]);
                    }
                  }}
                />
                <label className="label">
                  <span></span>
                  <span className="label-text-alt">
                    Only .vtt files supported
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <div className="btn btn-primary" onClick={handleEnter}>
                  Enter
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({
  name,
  roomCode,
  videoFile,
  subtitlesFile,
}: {
  name: string;
  roomCode: string;
  videoFile: File;
  subtitlesFile: File | null;
}) {
  return (
    <div className="hero min-h-screen">
      <video controls className="w-full max-w-4xl" crossOrigin="anonymous">
        <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
        {subtitlesFile && (
          <track
            src={URL.createObjectURL(subtitlesFile)}
            kind="subtitles"
            srcLang="en"
            label="English"
            default
          />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function Room() {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [videoFile, setvideoFile] = useState<File | null>(null);
  const [subtitlesFile, setsubtitlesFile] = useState<File | null>(null);

  if (roomCode === "") {
    // use some verify room code type of function here...

    return (
      <JoinForm
        name={name}
        setName={setName}
        roomCode={roomCode}
        setRoomCode={setRoomCode}
      />
    );
  } else if (videoFile === null) {
    return (
      <VideoForm
        setvideoFile={setvideoFile}
        setsubtitlesFile={setsubtitlesFile}
      />
    );
  }

  return (
    <VideoPlayer
      name={name}
      roomCode={roomCode}
      videoFile={videoFile}
      subtitlesFile={subtitlesFile}
    />
  );
}
