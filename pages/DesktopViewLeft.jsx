import { Fragment } from 'react'

function DesktopViewLeft () {
  return (
    <Fragment>
      <div className="w-3/4 md:block hidden h-screen bg-invitato-cover bg-center bg-cover">
        <div id="screen-left" className="bg-invitato-shadow w-full h-full p-11">
          <p className="title-header font-light tracking-2 invitato-animate-bottom-top">THE WEDDING OF</p>
          <h2 className="title-couple text-7xl font-normal my-8 invitato-animate-bottom-top">Nailal & Via</h2>
          <div className="w-72 invitato-animate-bottom-top">
            <p className="font-light italic tracking-1"><q>And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.</q>
              <br/>
              — Elizabeth Young
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DesktopViewLeft;