import { PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/16/solid';

function App() {
  return (
    <>
      {/* 스크린 */}
      <div className="screen">
        {/* 가사 */}
        <div className="lyrics">
          <p>All I know is now 알게 됐어 나 (I know)</p>
          <p style={{ backgroundPositionX: `${20 * -1}%` }}>
            그동안 맨날 always up and down (no more)
          </p>
          <p>생각 또 생각 spinnin' 'round and 'round, changing my mind</p>
        </div>

        {/* 컨트롤 컨테이너 */}
        <div className="controls-wrapper">
          {/* 진행 상태 바 */}
          <div className="progressbar-wrapper">
            <div className="progressbar">
              <div className="progressbar-fill" style={{ width: '2%' }}></div>
            </div>

            <div className="time">
              <span>00:08</span>
              <span>03:45</span>
            </div>
          </div>

          {/* 컨트롤 */}
          <div className="controls">
            {/* 버튼 목록 */}
            <div className="buttons">
              {/* 재생 button */}
              <button className="button-control">
                {/* 재생 아이콘 */}
                <PlayIcon className="play-icon" />

                {/* 일시정지 아이콘 */}
                {/* <PauseIcon /> */}
              </button>

              {/* 정지 버튼 */}
              <button className="button-control" disabled>
                <StopIcon />
              </button>
            </div>

            {/* 재생 속도 컨트롤 */}
            <div className="range-control-wrapper">
              <label>1x</label>
              <input
                className="range-control"
                type="range"
                min="0.25"
                max="3"
                step="0.25"
                defaultValue={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
