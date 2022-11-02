(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{418:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("允许PowerShell执行本地脚本")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set-executionpolicy")]),s._v(" remotesigned "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scope currentuser\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("配置安装目录（可选）")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Scoop 安装目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":SCOOP="),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D:\\Applications\\Scoop'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Environment]")]),s._v("::SetEnvironmentVariable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SCOOP'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":SCOOP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Scoop 全局软件安装目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":SCOOP_GLOBAL="),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'F:\\GlobalScoopApps'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Environment]")]),s._v("::SetEnvironmentVariable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SCOOP_GLOBAL'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":SCOOP_GLOBAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Machine'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("安装")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("iex")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("new-object")]),s._v(" net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("webclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downloadstring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://get.scoop.sh'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nor\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("iwr")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("useb get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("iex")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("GitHub访问不畅时，可能下载会不成功 。"),n("a",{attrs:{href:"https://github.com/521xueweihan/GitHub520",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 加速"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[s._v("#")]),s._v(" 仓库")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://rasa.github.io/scoop-directory/by-apps",target:"_blank",rel:"noopener noreferrer"}},[s._v("scoop-directory"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://scoop.netlify.app/buckets/",target:"_blank",rel:"noopener noreferrer"}},[s._v("netlify"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"设置代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[s._v("#")]),s._v(" 设置代理")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置")]),s._v("\nscoop config proxy 127"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1:7891\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消")]),s._v("\nscoop config "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加仓库")]),s._v("\nscoop bucket add <app>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仓库")]),s._v("\nscoop bucket "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" <app>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已安装仓库")]),s._v("\nscoop bucket list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询官方仓库")]),s._v("\nscoop bucket known\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查潜在问题")]),s._v("\nscoop checkup \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询库里面是否有这个软件")]),s._v("\nscoop search <app>   \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装软件")]),s._v("\nscoop install <app>  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载软件")]),s._v("\nscoop uninstall <app>  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新软件")]),s._v("\nscoop update <app>  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新所有软件")]),s._v("\nscoop update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除已安装软件的旧版本")]),s._v("\nscoop cleanup <app>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有旧版软件")]),s._v("\nscoop cleanup "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止某程序更新")]),s._v("\nscoop hold <app>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许某程序更新")]),s._v("\nscoop unhold <app> \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看软件信息")]),s._v("\nscoop info <app> \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已安装应用")]),s._v("\nscoop list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除某个app的缓存")]),s._v("\nscoop cache "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" <app>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配置")]),s._v("\nscoop config\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换软件的版本")]),s._v("\nscoop reset <app>"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@<version>"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("h2",{attrs:{id:"软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#软件"}},[s._v("#")]),s._v(" 软件")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aria2进行多线程下载")]),s._v("\nscoop install aria2 \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aria2 配置")]),s._v("\nscoop config aria2-enabled true\nscoop config aria2-retry-wait 4\nscoop config aria2-split 16\nscoop config aria2-max-connection-per-server 16\nscoop config aria2-min-"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split-size")]),s._v(" 4M\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索功能增强")]),s._v("\nscoop install scoop-search\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# terminal 美化")]),s._v("\nscoop install starship\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdk8")]),s._v("\nscoop install openjdk8-redhat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# python")]),s._v("\nscoop python\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node14")]),s._v("\nscoop install nodejs14\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# maven")]),s._v("\nscoop install maven\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# frp")]),s._v("\nscoop install frp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# typora")]),s._v("\nscoop install typora\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clash")]),s._v("\nscoop install clash-"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("windows\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# idea")]),s._v("\nscoop install idea-ultimate\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vscode")]),s._v("\nscoop install vscode\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# datagrip")]),s._v("\nscoop install datagrip\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# apifox")]),s._v("\nscoop install apifox\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep")]),s._v("\nscoop install grep\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git")]),s._v("\nscoop install git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# powershell")]),s._v("\nscoop install powershell\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# utools")]),s._v("\nscoop install utools\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodejs")]),s._v("\nscoop install nodejs16\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sublime")]),s._v("\nscoop install sublime-text\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br")])]),n("h2",{attrs:{id:"卸载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("scoop uninstall scoop\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);