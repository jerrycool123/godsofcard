import { useState, useEffect } from 'react';
import bannerImg from '../static/images/main_menu/new banner.png';
import ricImg from '../static/images/main_menu/里克.png';
import checkmateImg from '../static/images/main_menu/checkmateserverlogo-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish, faBullhorn, faChevronRight, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';

import LatetestCard from './LatestCard';
import CardEvent from './CardEvent';

import '../static/styles/MainMenu.css';

function MainMenu(props) {
  const [splashClass, setSplashClass] = useState('splash');

  useEffect(() => {
    const id = setTimeout(() => {
      setSplashClass(`${splashClass} display-none`);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={splashClass} onClick={() => setSplashClass(`${splashClass} display-none`)}>
        <h3 className="fade-in">人生 それもただのゲーム 毎回つまんなそうに生い 何の意味があるの？</h3>
        <h3 className="fade-in">それより 全部手放して 周リある限り操ってみて　この世界の真の神にならない？</h3>
        <h2 className="fade-in">卡牌之神 God Of Card</h2>
      </div>
      <img src={bannerImg} alt="" className="banner" />
      <div className="latestnews">
        <span className="title"><FontAwesomeIcon icon={faSatelliteDish} style={{fontSize: '24px', color: 'white'}} /> 最新消息 Latest News</span>
        <div className="main-content-container" style={{color: 'white'}}>
          <div className="content">
            <div className="header">
              <span className="title">
                <FontAwesomeIcon icon={faBullhorn} />&nbsp;&nbsp;
                <FontAwesomeIcon icon={faChevronRight} className="arrow" />&nbsp;
                第一期製作人員招募
              </span>
            </div>
            <div className="details">
              <span className="text">現在開啟第一期製作人員招募，製作人員的主要工作是為本機械人製作卡牌。製作的格式將放置於下面的資料檔裏，稍後會增加提交渠道供各位提交作品</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="cards-container">
        <LatetestCard />
        <CardEvent />
      </div>
      <br />
      <div className="description-container left">
        <div className="text-content">
          <span><FontAwesomeIcon icon={faRobot} />&nbsp;機械人介紹 Bot Introduction</span>
          <br />
          <span>卡牌之神機械人啟發自遊戲人生與及多到動漫，希望為各位動漫迷提供一個可以收集自己喜歡角色的地方。這個遊戲稍後更會加入戰鬥系統，玩家與玩家之中可以使用自己深愛的角色組成隊伍然後進行互相切磋。此外，所有角色會開放給全部玩家共同製作，大家可以參與製作自己喜歡的角色。那是不宜遲，<b>ゲーム開始。。。</b></span>
        </div>
        
        <div className="image-content">
          <img src={ricImg} alt="" style={{width: '30%'}} />
        </div>
      </div>
      <br />
      <div className="description-container right">
        <div className="image-content">
          <img src={checkmateImg} alt="" width="60%" />
        </div>
        <div className="text-content">
          <span><FontAwesomeIcon icon={faDiscord} />&nbsp;伺服器介紹 Discord Server Introduction</span>
          <br />
          <span>
            這是雀可美特的 Discord 官方伺服器， 歡迎大家加入討論有關動漫的話題，這伺服器也有獨特的點數系統供與及即將推出的卡牌機械人讓大家遊玩！！ 此伺服器也有專屬的機械人，歡迎大家加入！
            <br /><br />
            <a href="https://discord.gg/checkmatekuhaku">
              <FontAwesomeIcon icon={faDiscord} />&nbsp;https://discord.gg/checkmatekuhaku
            </a> 
            <br />
            <a href="https://www.youtube.com/c/%E9%9B%80%E5%8F%AF%E7%BE%8E%E7%89%B9">
              <FontAwesomeIcon icon={faYoutube} />&nbsp;雀可美特 
            </a>
          </span>
        </div>
      </div>
      <br /><br />
    </>
  );
}

export default MainMenu;