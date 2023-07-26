/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  computer408: [
    '笔记/计算机/介绍',
    {
      type: 'category',
      label: '📕操作系统',
      link: {
        type: 'generated-index',
        title: '操作系统知识点',
        description: "整理的计算机考研408操作系统的笔记",
        keywords: ['计算机','操作系统'],
      },
      items: [{
        type: 'autogenerated',
        dirName: '笔记/计算机/操作系统'
      }],
      collapsed: true
    },
    {
      type: 'category',
      label: '📕计算机网络',
      link: {
        type: 'generated-index',
        title: '计算机网络知识点',
        description: "整理的计算机考研408计算机网络的笔记",
        keywords: ['计算机','计算机网络'],
      },
      items: [{
        type: 'autogenerated',
        dirName: '笔记/计算机/计算机网络'
      }],
      collapsed: true
    },
  
  ],
  algorithm:[
    '算法/介绍',
    {
      type: 'category',
      label: '📕leetcode刷题',
      link: {
        type: 'generated-index',
        title: '力扣算法刷题',
        description: "整理的leetcode刷题笔记",
        keywords: ['leetcode','算法'],
      },
      items: [{
        type: 'autogenerated',
        dirName: '算法/LeetCode'
      }],
      collapsed: true
    },
    {
      type: 'category',
      label: '📕机器学习',
      link: {
        type: 'generated-index',
        title: '机器学习算法',
        description: "机器学习算法笔记",
        keywords: ['机器学习','算法'],
      },
      items: [{
        type: 'autogenerated',
        dirName: '算法/machineLearning'
      }],
      collapsed: true
    },
  ]
};

module.exports = sidebars;
