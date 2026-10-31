import { sitePath } from './paths';

export type Language = 'en' | 'zh';
export const localizedPath = (path: string, lang: Language) => sitePath(lang === 'zh' ? `/zh${path}` : path);
export const words = {
  en: {
    name: 'Dios Yang', fullName: 'Yichi (Dios) Yang', aboutName: 'Yichi(Dios) Yang',
    about: 'About', career: 'Career', project: 'Project', resume: 'CV/Resume', photography: 'Photography',
    description: 'The personal website of Yichi (Dios) Yang.',
    skip: 'Skip to content', navigation: 'Site navigation', mainNavigation: 'Main navigation', mobileNavigation: 'Mobile navigation', menu: 'Menu',
    contact: 'Contact', experience: 'Professional experience', readExperience: 'Read experience →', selectedWork: 'Selected Work',
    readFull: 'Read full experience →', summary: 'Summary', contents: 'On this page',
    duXiaoman: 'Du Xiaoman Technology (Beijing) Co., Ltd.', backDu: '← Du Xiaoman experience', backAllDu: '← All Du Xiaoman experience',
    collections: 'Photography collections', viewCollection: 'View photography collection', photos: 'photographs', openPhoto: 'Open full photograph',
    resumeZh: 'Chinese resume', resumeEn: 'English resume', maine: 'Maine', viewMaine: 'View the Maine photographs →',
    switchLabel: '切换到中文', switchText: '中文',
  },
  zh: {
    name: '杨易驰', fullName: '杨易驰', aboutName: '杨易驰',
    about: '关于我', career: '工作经历', project: '研究项目', resume: '个人简历', photography: '摄影',
    description: '杨易驰的个人网站，记录工作经历、研究项目与摄影作品。',
    skip: '跳转到正文', navigation: '网站导航', mainNavigation: '主导航', mobileNavigation: '移动端导航', menu: '菜单',
    contact: '联系方式', experience: '专业工作经历', readExperience: '查看工作经历 →', selectedWork: '主要工作',
    readFull: '查看完整经历 →', summary: '概括', contents: '本文目录',
    duXiaoman: '度小满科技（北京）有限公司', backDu: '← 度小满工作经历', backAllDu: '← 返回度小满全部经历',
    collections: '摄影作品集', viewCollection: '查看摄影作品集', photos: '摄影作品', openPhoto: '查看完整照片',
    resumeZh: '中文简历', resumeEn: '英文简历', maine: '缅因州', viewMaine: '查看缅因州摄影作品 →',
    switchLabel: 'Switch to English', switchText: 'English',
  },
} as const;
