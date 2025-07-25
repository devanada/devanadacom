import React from "react";

const StartMenu = () => {
  return (
    <div>
      <div className="w-full bg-header-start-menu-gradient h-14 p-1.5 rounded-t-sm flex items-center text-white self-start gap-2">
        <img
          src="/assets/windows/icons/user.png"
          alt="Start Menu"
          className="w-11 h-11 rounded-sm border border-[#DEDEDECC]"
        />
        <p className="text-sm font-bold text-shadow-sm">User</p>
      </div>
      <div>Test</div>
      <div className="w-full h-9 bg-footer-start-menu-gradient flex self-end items-center justify-end text-white px-2 gap-2">
        <div className="p-1 flex items-center hover:bg-[#3C50D280] group hover:active:[&>*]:translate-x-[1px] hover:active:[&>*]:translate-y-[1px] text-[11px] gap-1 cursor-default">
          <img
            src="/assets/windows/icons/546(32x32).png"
            alt="Log Off"
            className="w-5 h-5"
          />
          <p>Log Off</p>
        </div>
        <div className="p-1 flex items-center hover:bg-[#3C50D280] group hover:active:[&>*]:translate-x-[1px] hover:active:[&>*]:translate-y-[1px] text-[11px] gap-1 cursor-default">
          <img
            src="/assets/windows/icons/310(32x32).png"
            alt="Log Off"
            className="w-5 h-5"
          />
          <p>Turn Off Computer</p>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
