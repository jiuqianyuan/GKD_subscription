import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wsds.gamemaster',
  name: '迅游手游加速器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/13930391',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-卡片广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
          matches:
            'ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13930398',
        },
        {
          preKeys: [0],
          activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13930399',
        },
      ],
    },
  ],
});
