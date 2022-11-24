import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as d,a,d as n,e,b as i,r as t}from"./app.8070de6f.js";const u={},s=e('<blockquote><p>\u76EE\u524D\u5904\u4E8E\u529F\u80FD\u5B8C\u5584\u9636\u6BB5\uFF0C\u53EF\u80FD\u4F1A\u968F\u7740\u7248\u672C\u66F4\u65B0\uFF0C\u5BF9\u65E7\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5BFC\u81F4\u8BBE\u7F6E\u683C\u5F0F\u53D8\u5316\u3001\u4EE3\u7801\u7ED3\u6784\u53D8\u5316\u7B49\u591A\u79CD\u95EE\u9898\uFF0C\u5982\u53D1\u73B0\u4E4B\u524D\u7684\u8BBE\u7F6E\u65E0\u6CD5\u6B63\u5E38\u8BFB\u53D6\uFF0C\u8BF7\u67E5\u770B\u8BF4\u660E\u4E66\u8DDF\u8FDB\u8BBE\u7F6E\u683C\u5F0F</p></blockquote><h1 id="_0-5-x" tabindex="-1"><a class="header-anchor" href="#_0-5-x" aria-hidden="true">#</a> 0.5.X</h1><h2 id="_0-5-4" tabindex="-1"><a class="header-anchor" href="#_0-5-4" aria-hidden="true">#</a> 0.5.4</h2><h3 id="\u91CD\u8981\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u66F4\u65B0" aria-hidden="true">#</a> \u91CD\u8981\u66F4\u65B0</h3><ul><li>\u517C\u5BB9\u4E86Stable Diffusion\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539novelai_mode\u4E3A&quot;sd&quot;\uFF0C\u5E76\u8BBE\u7F6Enovelai_site\u4E3A&quot;127.0.0.1:7860&quot;(\u4FEE\u6539\u4E3A\u4F60\u7684\u670D\u52A1\u5668ip\u548C\u7AEF\u53E3) <ul><li>\u5FC5\u987B\u5728SD\u7684webui-user.bat\u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E<strong>set COMMANDLINE_ARGS=--api</strong>\uFF0C\u5E76\u4F7F\u7528webui-user.bat\u542F\u52A8\u3002\u5426\u5219bot\u65E0\u6CD5\u8FDE\u63A5\u5230SD</li></ul></li></ul><h3 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h3><ul><li>\u73B0\u5728site\u4E3A\u53EF\u9009\u9879\uFF0C\u4EC5\u5F53\u4F60\u7684\u670D\u52A1\u5668\u5728\u975E\u9ED8\u8BA4\u7AEF\u53E3\uFF08naifu\u4E3A6969\uFF0Csd\u4E3A7860\uFF09\u65F6\u9700\u8981\u8BBE\u7F6E</li></ul><h3 id="\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u73B0\u5728\u5408\u5E76\u6D88\u606F\u4E2D\uFF0C\u9ED8\u8BA4\u4F1A\u663E\u793A\u53D1\u9001\u8005\u4E3A\u8F93\u5165\u6307\u4EE4\u7684\u4EBA\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6Enovelai_antireport\u4E3AFalse\u5173\u95ED</li></ul><h3 id="\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E863.10\u975E\u5FC5\u8981\u8BED\u6CD5\u5BFC\u81F43.9\u62A5\u9519\u7684\u95EE\u9898</li></ul><h2 id="_0-5-3-20221122" tabindex="-1"><a class="header-anchor" href="#_0-5-3-20221122" aria-hidden="true">#</a> 0.5.3_20221122</h2><h3 id="\u65B0\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u73B0\u5728\u5C06FIFO\u66F4\u540D\u4E3AAIDRAW\uFF0C\u5E76\u4E14\u5F00\u653E\u7ED9\u5176\u4ED6\u63D2\u4EF6\uFF0C\u8BE5\u7C7B\u4E2D\u5305\u542B\u4E86\u6240\u6709\u751F\u6210\u56FE\u7247\u6838\u5FC3\u7684\u90E8\u5206\uFF08\u4E0D\u5305\u542B\u9884\u5904\u7406\uFF0C\u7FFB\u8BD1\u7B49\uFF09\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5236\u4F5C\u6269\u5C55 <ul><li>\u4F7F\u7528<strong>from nonebot_plugin_novelai import AIDRAW</strong>\u5BFC\u5165</li></ul></li><li>\u628A\u8BF4\u660E\u4E66\u7684\u4F7F\u7528\u65B9\u6CD5\u90E8\u5206\u5199\u5B8C\u4E86</li></ul><h3 id="\u66F4\u6539-1" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-1" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u5408\u5E76\u4E86shape,width\u548Cheight\u53C2\u6570\u4E3A-r\uFF0C--resolution <ul><li>\u81EA\u5B9A\u4E49\u957F\u5BBD\u683C\u5F0F\u4E3A-r 1024x1024</li></ul></li><li>\u5C06\u7EA6\u7A3F\u6307\u4EE4\u52A0\u4E86\u56DE\u6765\uFF0C\u4EE5\u4FBFkoishi\u63D2\u4EF6\u7528\u6237\u65E0\u7F1D\u9002\u5E94</li><li>\u5C06nopre\u53C2\u6570\u6539\u4E3Aoverride\uFF0C\u4EE5\u4FBFkoishi\u63D2\u4EF6\u7528\u6237\u65E0\u7F1D\u9002\u5E94</li></ul><h3 id="\u4FEE\u590D-1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-1" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E86\u6587\u672C\u68C0\u67E5\u3001\u7FFB\u8BD1\u6CA1\u80FD\u6B63\u5E38\u751F\u6548\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u4EE5\u56FE\u751F\u56FE\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u4EE5\u56FE\u751F\u56FEtags\u4E2D\u4F1A\u5305\u542BCQ\u7801\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u975E\u4ED8\u8D39\u6A21\u5F0F\u901A\u8FC7\u624B\u52A8\u8F93\u5165\u957F\u5BBD\u53EF\u4EE5\u7A81\u7834640\u9650\u5236\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u6253\u5305\u6587\u4EF6\u4E0D\u5168\u7684\u95EE\u9898</li></ul><h2 id="_0-5-2-20221122" tabindex="-1"><a class="header-anchor" href="#_0-5-2-20221122" aria-hidden="true">#</a> 0.5.2_20221122</h2><h3 id="\u4FEE\u590D-2" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-2" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u7D27\u6025\u4FEE\u590D\u4E86\u4E0A\u4E2A\u7248\u672C\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\u7684bug</li></ul><h3 id="\u65B0\u529F\u80FD-1" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-1" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u52A0\u5165\u4E86novelai_size\u8BBE\u7F6E\uFF0C\u7528\u4E8E\u9650\u5236\u56FE\u7247\u5206\u8FA8\u7387\uFF0C\u9ED8\u8BA4\u4E3A1024\uFF08\u5373\u751F\u6210\u7684\u56FE\u7247\u5206\u8FA8\u7387\u4E0D\u4F1A\u5927\u4E8E1024*1024\uFF09 <ul><li>naifu\u548Cnovelai\u65E0\u6CD5\u652F\u6301\u5927\u4E8E1024\u7684\u957F\u5BBD</li></ul></li></ul><h3 id="\u66F4\u6539-2" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-2" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u73B0\u5728\u5982\u679C\u7528\u6237\u628A\u540E\u53F0\u670D\u52A1\u5668\u641E\u5D29\u4E86\u4F1A\u6709\u63D0\u793A</li><li>\u73B0\u5728\u5408\u5E76\u6D88\u606F\u4E2D\u4F1A\u663E\u793A\u4F7F\u7528\u7684\u540E\u7AEF\u7C7B\u578B\uFF08\u5B9E\u9645\u662F\u89E3\u51B3bug\u987A\u4FBF\u52A0\u7684x\uFF09</li></ul><h2 id="_0-5-1-20221121" tabindex="-1"><a class="header-anchor" href="#_0-5-1-20221121" aria-hidden="true">#</a> 0.5.1_20221121</h2><h3 id="\u91CD\u8981\u66F4\u65B0-1" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u66F4\u65B0-1" aria-hidden="true">#</a> \u91CD\u8981\u66F4\u65B0</h3><ul><li>\u517C\u5BB9\u4E86Naifu\uFF0C\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539novelai_mode\u4E3A&quot;naifu&quot;\uFF0C\u5E76\u8BBE\u7F6Enovelai_site\u4E3A&quot;127.0.0.1:6969&quot;(\u4FEE\u6539\u4E3A\u4F60\u7684\u670D\u52A1\u5668ip\u548C\u7AEF\u53E3)</li></ul><h3 id="\u7834\u574F\u6027\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#\u7834\u574F\u6027\u66F4\u6539" aria-hidden="true">#</a> \u7834\u574F\u6027\u66F4\u6539</h3><ul><li>\u5408\u5E76\u4E86\u8BBE\u7F6E\u4E2D\u90E8\u5206\u8BBE\u7F6E <ul><li>api_domain\uFF0Csite_domain\u5408\u5E76\u4E3Asite</li><li>save_pic\u548Csave_detail\u5408\u5E76\u4E3Asave\uFF0C\u9ED8\u8BA4\u4E3A1\uFF08\u4FDD\u5B58\u56FE\u7247\uFF09\uFF0C0\u4E3A\u4E0D\u4FDD\u5B58\uFF0C2\u4E3A\u4FDD\u5B58\u56FE\u7247\u548C\u8FFD\u8E2A\u4FE1\u606F</li></ul></li></ul><h3 id="\u65B0\u529F\u80FD-2" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-2" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u52A0\u5165\u4E86\u4E25\u683C\u70B9\u6570\u6A21\u5F0F\uFF08novelai_paid=2\uFF0C\u6CE8\u610F\u8BE5\u503C\u7684\u53D6\u503C\u65B9\u5F0F\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u8FDB\u884C\u66F4\u6539\uFF09 <ul><li>\u5728\u4E25\u683C\u70B9\u6570\u6A21\u5F0F\u4E0B\uFF0C\u65E0\u8BBA\u4EC0\u4E48\u65F6\u5019\u90FD\u4F1A\u8BA1\u7B97\u70B9\u6570\uFF0C\u9664\u4E86superuser</li></ul></li><li>\u52A0\u5165\u4E86\u6BCF\u65E5\u4E0A\u9650\u6A21\u5F0F\uFF08novelai_daylimit\uFF0C\u503C\u4E3Aint\uFF0C\u5373\u4E0A\u9650\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A0\u5173\u95ED\uFF09</li><li>\u73B0\u5728\u652F\u6301\u624B\u52A8\u8F93\u5165\u5BBD\u9AD8\u4E86\uFF0C\u5E76\u89E3\u9664\u4E86512\u7684\u9650\u5236\uFF08\u6700\u59271024\uFF09</li></ul><h3 id="\u4FEE\u590D-3" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-3" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E86\u7BA1\u7406\u6307\u4EE4\u8F93\u5165\u4E0D\u5168\u4E5F\u4F1A\u89E6\u53D1\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-3" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-3" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u73B0\u5728\u547D\u4EE4\u53EF\u4EE5\u4E0D\u5E26\u201C.\u201D\uFF0C\u4EE5\u652F\u6301bot\u672C\u8EAB\u7684\u547D\u4EE4\u8D77\u59CB\u7B26\u53F7</li><li>\u73B0\u5728\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u65F6\uFF0Cbot\u4F1A\u5728\u524D\u7AEF\u8FDB\u884C\u63D0\u793A</li><li>\u73B0\u5728\u8F6C\u53D1\u6D88\u606F\u4E2D\uFF0Ctags\u548Cntags\u4F1A\u5206\u522B\u5355\u72EC\u4F5C\u4E3A\u4E00\u6761\u6D88\u606F\uFF0C\u4EE5\u907F\u514D\u6D88\u606F\u6BB5\u8FC7\u957F\u7684\u95EE\u9898\u3002\u5E76\u4E14\u5C06\u56FE\u7247\u653E\u5230\u4E86\u6700\u524D\u65B9</li></ul><h2 id="\u{1F4A5}-0-5-0-20221120" tabindex="-1"><a class="header-anchor" href="#\u{1F4A5}-0-5-0-20221120" aria-hidden="true">#</a> \u{1F4A5} 0.5.0_20221120</h2><h3 id="\u{1F4A5}\u91CD\u5927\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u{1F4A5}\u91CD\u5927\u53D8\u66F4" aria-hidden="true">#</a> \u{1F4A5}\u91CD\u5927\u53D8\u66F4</h3><ul><li>\u6307\u4EE4\u683C\u5F0F\u4FEE\u6539\uFF0C\u4E0D\u518D\u4EE5-\u5206\u5272\u53C2\u6570\uFF0C\u800C\u662F\u4EE5shell\u5F62\u5F0F\u89E3\u6790\u53C2\u6570 <ul><li>\u4F8B:.aidraw loli,cute --ntags big breast --seed 114514</li><li>\u6307\u4EE4\u683C\u5F0F\u4FEE\u6539\u540E\uFF0C\u652F\u6301\u6392\u9664\u8BCD\u6761\u53CA\u5176\u4ED6\u6240\u6709\u9700\u8981\u7684\u53C2\u6570</li></ul></li><li>\u4EE3\u7801\u7ED3\u6784\u8FDB\u884C\u4E86\u5927\u5E45\u5EA6\u91CD\u6784</li><li>\u79FB\u9664\u4E86Python3.10\u7684\u9650\u5236\uFF0C\u5E76\u5B9E\u9A8C\u6027\u5730\u5C06\u7248\u672C\u8981\u6C42\u4E0B\u964D\u81F33.8\uFF08\u5982\u679C\u4E0D\u80FD\u8FD0\u884C\u518D\u5F80\u4E0A\u52A0x\uFF09</li></ul><h3 id="\u65B0\u529F\u80FD-3" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-3" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u52A0\u5165\u4E86\u81EA\u52A8\u64A4\u56DE\u529F\u80FDnovelai_revoke\u8BBE\u7F6E\uFF0C\u8BE5\u503C\u9ED8\u8BA4\u4E3A0\uFF0C\u5F53\u4E0D\u4E3A0\u65F6\u4E3A\u64A4\u56DEcd\uFF08\u5355\u4F4Ds\uFF09</li><li>fifo\u4E2D\u52A0\u5165\u4E86\u5177\u6709\u53EF\u8BFB\u6027\u7684\u65F6\u95F4\u5C5E\u6027\uFF0C\u7528\u4E8E\u8FFD\u8E2A\u3002\u540C\u65F6userid\uFF0Cgroupid\u73B0\u5728\u4E5F\u4F1A\u8F93\u51FA\u5728detail\u6587\u4EF6\u548C\u540E\u53F0\u4E2D</li></ul><h3 id="\u4FEE\u590D-4" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-4" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590Dsuperuser\u6743\u9650\u6CA1\u80FD\u6B63\u5E38\u751F\u6548\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u751F\u6210\u5931\u8D25\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u591A\u5904\u62A5\u9519\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86set\u529F\u80FD\u6CA1\u80FD\u6B63\u5E38\u83B7\u53D6\u8BBE\u7F6E\u7684\u95EE\u9898</li></ul><h3 id="\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316" aria-hidden="true">#</a> \u4F18\u5316</h3><ul><li>\u5C06FIFO\u961F\u5217\u7684\u5B9E\u73B0\u7531\u6570\u7EC4\u6539\u4E3A\u53CC\u5411\u6570\u7EC4\uFF0C\u964D\u4F4E\u4E86\u65F6\u95F4\u590D\u6742\u5EA6</li></ul><h3 id="\u66F4\u6539-4" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-4" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u73B0\u5728bot\u672A\u8BBE\u7F6Enickname\u65F6\uFF0C\u4F1A\u5C06\u540D\u5B57\u8BBE\u7F6E\u4E3A\u63D2\u4EF6\u540D\u4EE5\u907F\u514Dapi\u62A5\u9519</li><li>\u73B0\u5728\u56FE\u7247\u4F1A\u5B58\u653E\u5728\u4EE5\u7FA4\u53F7\u547D\u540D\u7684\u6587\u4EF6\u5939\u4E2D</li><li>\u73B0\u5728FIFO\u4E2D\uFF0C\u53CD\u9762tag\u540D\u79F0\u66F4\u6539\u4E3Antags\uFF0C\u4EE5\u9002\u5E94\u7406\u89E3\u4E60\u60EF\uFF0C\u76F8\u5BF9\u5E94\u7684\u6240\u6709\u6B63\u9762tag\u547D\u540D\u7EDF\u4E00\u4E3Atags</li><li>\u73B0\u5728seed\u4E0D\u518D\u9ED8\u8BA4\u4E3A\u65F6\u95F4\u6233\uFF0C\u800C\u662F0-4294967295\u4E4B\u95F4\u968F\u673A</li></ul><h3 id="\u{1F4A5}\u5E9F\u5F03" tabindex="-1"><a class="header-anchor" href="#\u{1F4A5}\u5E9F\u5F03" aria-hidden="true">#</a> \u{1F4A5}\u5E9F\u5F03</h3><ul><li>\u7531\u4E8EAI\u9274\u9EC4API\u8F83\u4E3A\u9E21\u808B\u4E14\u5BB9\u6613\u5BC4\uFF0C\u6CE8\u91CA\u6389\u4E86\u8BE5\u90E8\u5206\u4EE3\u7801\u5165\u53E3\uFF0C\u4E0D\u518D\u7EF4\u62A4\u76F8\u5173\u65B9\u6CD5\uFF0C\u82E5\u6709\u9700\u6C42\u53EF\u81EA\u884C\u53D6\u6D88\u6CE8\u91CA\u5E76\u6D4B\u8BD5</li></ul><h1 id="_0-4-x" tabindex="-1"><a class="header-anchor" href="#_0-4-x" aria-hidden="true">#</a> 0.4.X</h1><h2 id="_0-4-12-20221029" tabindex="-1"><a class="header-anchor" href="#_0-4-12-20221029" aria-hidden="true">#</a> 0.4.12_20221029</h2><h3 id="\u65B0\u529F\u80FD-4" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-4" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u73B0\u5728\u4EE5\u56FE\u751F\u56FE\u652F\u6301\u901A\u8FC7\u56DE\u590D\u56FE\u7247\u6765\u83B7\u53D6\u56FE\u7247</li></ul><h3 id="\u66F4\u6539-5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-5" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u5728\u56FE\u7247\u6570\u636E\u8F93\u51FA\u4E2D\u6DFB\u52A0\u4E86img2img\u5E03\u5C14\u503C\u7528\u4E8E\u533A\u5206\u662F\u5426\u5305\u542B\u56FE\u7247</li></ul><h3 id="\u5E9F\u5F03" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03" aria-hidden="true">#</a> \u5E9F\u5F03</h3><ul><li>\u5E9F\u5F03\u4E86\u7EA6\u7A3F\u6307\u4EE4\uFF0C\u4EE5\u907F\u514D\u4EA7\u751F\u7248\u6743\u65B9\u9762\u7684\u6697\u793A\u3002\u6240\u6709\u751F\u6210\u7684\u56FE\u7247\u7248\u6743\u4E0E\u63D2\u4EF6\u4F5C\u8005\u65E0\u5173</li></ul><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><ul><li>\u63D2\u4EF6\u5DF2\u7ECF\u57FA\u672C\u7A33\u5B9A\uFF0C\u8FDB\u5165\u77ED\u6682\u7684\u4F11\u606F\u671F\u3002\u4E0B\u6B21\u66F4\u65B0\u4F1A\u91CD\u6784\u6307\u4EE4\uFF0C\u5E76\u8FDB\u51650.5.0\u7248\u672C</li></ul><h2 id="_0-4-11-20221029" tabindex="-1"><a class="header-anchor" href="#_0-4-11-20221029" aria-hidden="true">#</a> 0.4.11_20221029</h2><h3 id="\u65B0\u529F\u80FD-5" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-5" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u6DFB\u52A0\u4E86novelai_pure\u8BBE\u7F6E\uFF0C\u5F53\u5173\u95ED\u65F6\uFF0C\u56FE\u7247\u4F1A\u548C\u6570\u636E\u6253\u5305\u4E3A\u5408\u5E76\u6D88\u606F\u53D1\u9001\uFF0C\u5F00\u542F\u65F6\u4EC5\u4F1A\u53D1\u9001\u56FE\u7247\uFF0C\u9ED8\u8BA4\u5173\u95ED <ul><li>\u8BE5\u8BBE\u7F6E\u53EF\u4EE5\u901A\u8FC7set\u529F\u80FD\u4FEE\u6539</li></ul></li><li>\u6DFB\u52A0\u4E86novelai_save_detail\u8BBE\u7F6E\uFF0C\u5F53\u5F00\u542F\u65F6\uFF0C\u6570\u636E\u4F1A\u5355\u72EC\u4FDD\u5B58\u4E3A\u540C\u540D\u7684txt\u6587\u4EF6\uFF0C\u5173\u95ED\u65F6\u4E0D\u4FDD\u5B58\uFF0C\u9ED8\u8BA4\u5173\u95ED</li></ul><h3 id="\u4FEE\u590D-5" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-5" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u91CD\u7F6E\u7FA4tag\u65F6\uFF0C\u4F1A\u5C06\u503C\u8BBE\u4E3ANone\u7684\u95EE\u9898</li><li>\u4FEE\u590Dset\u529F\u80FDvalue\u503C\u4E2D\u5305\u542B\u7A7A\u683C\u65F6\u65E0\u6CD5\u5B8C\u6574\u89E3\u6790\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-6" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-6" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u6587\u4EF6\u540D\u4E0D\u518D\u5305\u542Btag\u548Cseed\uFF0C\u800C\u662F\u7EDF\u4E00\u4E3A\u56FE\u7247\u7684md5\u503C</li><li>\u5C4F\u853D\u8BCD\u6DFB\u52A0bloody</li></ul><h2 id="_0-4-10-20221027" tabindex="-1"><a class="header-anchor" href="#_0-4-10-20221027" aria-hidden="true">#</a> 0.4.10_20221027</h2><h3 id="\u4FEE\u590D-6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-6" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u7FFB\u8BD1\u65E0\u6CD5\u4F7F\u7528\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-7" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-7" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u7FA4\u8BBE\u7F6E\u7684\u6743\u9650\u5F00\u653E\u7ED9superuser\uFF0C\u540C\u65F6\u672A\u6EE1\u8DB3\u6743\u9650\u4F1A\u4E2D\u65AD\u5904\u7406\u6D41\u7A0B</li></ul><h2 id="_0-4-9-20221026" tabindex="-1"><a class="header-anchor" href="#_0-4-9-20221026" aria-hidden="true">#</a> 0.4.9_20221026</h2><h3 id="\u65B0\u529F\u80FD-6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-6" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u73B0\u5728set\u529F\u80FD\u53EF\u4EE5\u8F93\u5165\u53C2\u6570\u5168\u79F0</li><li>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7config\u8BBE\u7F6Enovelai_uc\uFF08\u6392\u9664\u8BCD\u6761\uFF09</li><li>\u73B0\u5728set\u529F\u80FD\u53EF\u4EE5\u8BBE\u7F6Euc\uFF08\u6392\u9664\u8BCD\u6761\uFF09</li></ul><h3 id="\u4FEE\u590D-7" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-7" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E86\u8C03\u53D6AI\u68C0\u5B9AAPI\u5931\u8D25\u65F6\uFF0C\u65E0\u6CD5\u6B63\u5E38\u83B7\u53D6\u5F02\u5E38\u4FE1\u606F\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86AI\u68C0\u5B9A\u62A5\u9519413\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u6587\u672C\u751F\u56FE\u65F6\u6B65\u6570\u88AB\u56FA\u5B9A\u523050\u7684\u95EE\u9898\uFF0C\u73B0\u5728\u4F1A\u6B63\u5E38\u4E3A28</li><li>\u4FEE\u590D\u4E86\u70B9\u6570\u8BA1\u7B97\u51FD\u6570\uFF0C\u73B0\u5728\u4F1A\u5C06\u6B65\u6570\u8BA1\u5165\u8BA1\u7B97</li><li>\u66F4\u6362\u4E86DeepdanbooruAPI\uFF0C\u4E14\u73B0\u5728\u7684API\u4F3C\u4E4E\u51C6\u786E\u7387\u66F4\u9AD8</li><li>\u4FEE\u590D\u4E86\u8F93\u5165\u5355\u72EC\u8BCD\u6761\u65F6\uFF0C\u7A7A\u683C\u4F1A\u6D88\u5931\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u7248\u672C\u66F4\u65B0\u8FD8\u662F\u4F1A\u91CD\u590D\u63A8\u9001\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-8" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-8" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u73B0\u5728\u4F1A\u4FDD\u5B58\u4E3A\u5360\u7528\u7A7A\u95F4\u66F4\u5C0F\u7684jpg\u683C\u5F0F</li><li>\u56DE\u590D\u4E2D\u4F7F\u7528\u7684\u8BCD\u6761\u73B0\u5728\u4F1A\u5305\u542B\u5185\u7F6E\u8BCD\u6761</li><li>\u73B0\u5728BOT\u4E3B\u4E0D\u9700\u8981\u7BA1\u7406\u5458\u6743\u9650\u4E5F\u80FD\u591F\u66F4\u6539\u7FA4\u8BBE\u7F6E</li><li>\u56FE\u7247\u73B0\u5728\u7684\u547D\u540D\u4E0D\u4F1A\u5E26\u6709hash\uFF0C\u800C\u662F\u4EE5\u987A\u5E8F\u6570\u5B57\u7ED3\u5C3E</li><li>\u73B0\u5728ai\u68C0\u5B9AAPI\u4F1A\u81EA\u52A8\u91CD\u8BD5\u6700\u591A\u4E09\u6B21</li><li>\u73B0\u5728FIFO\u7C7B\u4E2D\u5305\u542B\u4E86\u6240\u6709novelai\u53C2\u6570\uFF0C\u5E76\u5C06\u83B7\u53D6\u8BF7\u6C42\u4F53\u7684\u51FD\u6570\u7F6E\u4E8EFIFO\u7C7B\u4E2D</li><li>\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u7CBE\u7B80\u548C\u7B80\u5355\u6CE8\u91CA\uFF0C\u5E76\u5C1D\u8BD5\u5C06\u4E0Enovelai\u670D\u52A1\u5668\u4EA4\u4E92\u90E8\u5206\u72EC\u7ACB</li></ul><h3 id="\u5E9F\u5F03-1" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03-1" aria-hidden="true">#</a> \u5E9F\u5F03</h3><ul><li>\u{1F4A5}\u4E0D\u518D\u652F\u6301\u540C\u65F6\u5BF9\u591A\u5F20\u56FE\u7247\u4EE5\u56FE\u751F\u56FE</li></ul><h2 id="_0-4-8-20221024" tabindex="-1"><a class="header-anchor" href="#_0-4-8-20221024" aria-hidden="true">#</a> 0.4.8_20221024</h2><h3 id="\u65B0\u529F\u80FD-7" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-7" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u73B0\u5728\u56DE\u590D\u4E2D\u4F1A\u6DFB\u52A0\u4F7F\u7528\u7684\u8BCD\u6761</li><li>\u5206\u7FA4\u542F\u7528\u652F\u6301\u9ED1\u767D\u540D\u5355\u4E86 <ul><li>\u539F\u6709\u7684NOVELAI_BAN\u6539\u4E3ANOVELAI_ON(bool),\u5373\u5168\u5C40\u5F00\u542F/\u5173\u95ED</li><li>aidraw on\u903B\u8F91\u4E0Eaidraw set\u903B\u8F91\u5408\u5E76\uFF0C\u53EF\u4EE5\u4F7F\u7528.aidraw set on True\u914D\u7F6E\uFF0C\u540C\u6837\u4FDD\u7559\u4E86aidraw on\u7684\u8BED\u6CD5</li></ul></li></ul><h3 id="\u4FEE\u590D-8" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-8" aria-hidden="true">#</a> \u4FEE\u590D</h3>',84),o=a("li",null,"\u4FEE\u590D\u4E86\u57280.4.7\u4E2D\u5C4F\u853D\u8BCD\u8BEF\u6740\u7684\u95EE\u9898",-1),c=i("\u4FEE\u590D\u4E86DeepL\u7FFB\u8BD1\u5F15\u64CE\u65E0\u6CD5\u5DE5\u4F5C\u7684\u95EE\u9898,\u611F\u8C22"),_={href:"https://github.com/pk4ever1",target:"_blank",rel:"noopener noreferrer"},b=i("@pk4ever1"),f=i("\u5E2E\u52A9\u6D4B\u8BD5"),x=e('<h3 id="\u66F4\u6539-9" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-9" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u5220\u9664\u4E86\u68C0\u67E5\u8BCD\u6761\u5185\u5BB9\u7684\u903B\u8F91\uFF0C\u5141\u8BB8\u7528\u6237\u4F7F\u7528\u7A7A\u8BCD\u6761\uFF08\u5373\u4EC5\u4F7F\u7528\u5185\u7F6E\u8BCD\u6761\uFF09</li></ul><h2 id="_0-4-7-20221023" tabindex="-1"><a class="header-anchor" href="#_0-4-7-20221023" aria-hidden="true">#</a> 0.4.7_20221023</h2><h3 id="\u65B0\u529F\u80FD-8" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-8" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u52A0\u5165\u4E86DeepL\u7FFB\u8BD1API\uFF08\u9700\u8981\u8FDB\u4E00\u6B65\u6D4B\u8BD5\u548C\u53CD\u9988\uFF09</li><li>\u6253\u5F00H\u6A21\u5F0F\u540E\uFF0C\u73B0\u5728\u4F1A\u81EA\u52A8\u5207\u6362\u5230novelai\u5B8C\u6574\u6A21\u578B</li><li>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7.aidraw set\u67E5\u770B\u548C\u8BBE\u7F6E\u672C\u7FA4\u7684\u9ED8\u8BA4\u8BCD\u6761</li><li>\u70B9\u6570\u6A21\u5F0F\u73B0\u5728\u751F\u6210\u5927\u56FE\u548C\u591A\u56FE\u4E5F\u4F1A\u6263\u9664\u70B9\u6570\u4E86\uFF0C\u4FDD\u6301\u548C\u5B98\u7F51\u4E00\u81F4</li><li>\u52A0\u5165\u4E86\u6548\u679C\u66F4\u597D\u7684\u8C37\u6B4C\u4EE3\u7406\u514D\u8D39\u7FFB\u8BD1API\uFF0C\u9ED8\u8BA4\u4F18\u5148\u7EA7\u9AD8\u4E8E\u6709\u9053\u7FFB\u8BD1</li></ul><h3 id="\u4FEE\u590D-9" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-9" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E86\u5728\u67D0\u4E9B\u73AF\u5883\u4E0B\u5BFC\u81F4aiohttp\u62A5\u9519\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86.aidraw set\u4F1A\u63A5\u53D7\u9519\u8BEF\u6570\u636E\u683C\u5F0F\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u70B9\u6570\u6A21\u5F0F\u4E0B\u6587\u672C\u751F\u56FE\u4E5F\u4F1A\u6263\u9664\u70B9\u6570\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u4E2D\u82F1\u6DF7\u5408\u8F93\u5165\u4F1A\u5BFC\u81F4\u7FFB\u8BD1\u4E0D\u7B26\u5408\u9884\u671F\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-10" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-10" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u6574\u5408\u4E86\u4EE5\u56FE\u751F\u56FE\u548C\u6587\u672C\u751F\u56FE\u7684\u8BF7\u6C42\u903B\u8F91</li><li>\u73B0\u5728\u540E\u53F0\u83B7\u53D6\u8BCD\u6761\u65F6\u5C06\u4F1A\u76F4\u63A5\u663E\u793A\u7FFB\u8BD1\u4E4B\u540E\u7684\u8BCD\u6761</li><li>\u5C06H\u5C4F\u853D\u8BCD\u68C0\u6D4B\u79FB\u81F3\u7FFB\u8BD1\u4E4B\u540E\uFF0C\u53BB\u9664\u4E86\u201C\u88F8\u201D\uFF0C\u6DFB\u52A0\u4E86\u4E00\u5927\u5806\u5C4F\u853D\u8BCD\uFF0C\u5E76\u4E0D\u518D\u5C06\u5C4F\u853D\u8BCD\u52A0\u5165\u53CD\u9762\u8BCD\u6761</li><li>\u5C06\u4F18\u5316TAG\u7CBE\u7B80\u81F3\u4E0E\u5B98\u7F51\u4E00\u81F4</li></ul><h2 id="_0-4-6-20221022" tabindex="-1"><a class="header-anchor" href="#_0-4-6-20221022" aria-hidden="true">#</a> 0.4.6_20221022</h2><h3 id="\u65B0\u529F\u80FD-9" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-9" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u73B0\u5728\u4F1A\u901A\u8FC7AI\u5224\u65AD\u751F\u6210\u540E\u7684\u56FE\u7247\u662F\u5426nsfw\uFF0C\u5E76\u5C06\u4E0D\u540C\u5224\u65AD\u7ED3\u679C\u7684\u56FE\u7247\u5B58\u50A8\u5728\u5355\u72EC\u6587\u4EF6\u5939\u4E2D</li><li>\u73B0\u5728\u53EF\u4EE5\u4FEE\u6539\u5355\u7FA4\u7684cd <ul><li>\u5728\u9700\u8981\u4FEE\u6539\u7684\u7FA4\u5185\u4F7F\u7528.aidraw set cd 120\u5C06cd\u4FEE\u6539\u4E3A120</li><li>\u5728\u7FA4\u5185\u4F7F\u7528.aidraw set\u67E5\u770B\u672C\u7FA4\u7684\u8BBE\u7F6E</li></ul></li></ul><h3 id="\u4FEE\u590D-10" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-10" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u5220\u9664\u4E86\u542F\u52A8\u65F6\u7248\u672C\u81EA\u68C0\u4EE5\u89E3\u51B3\u4E0E\u90E8\u5206\u63D2\u4EF6\u51B2\u7A81\u548C\u5728Unix\u7CFB\u7EDF\u4E0A\u62A5\u9519\u7684\u95EE\u9898</li><li>\u5728H\u5C4F\u853D\u8BCD\u4E2D\u6DFB\u52A0\u201D\u88F8\u201C\u4EE5\u89E3\u51B3\u4E2D\u6587\u7ED5\u8FC7nude\u5173\u952E\u8BCD\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-11" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-11" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>\u6574\u5408\u4E86\u4EE5\u56FE\u751F\u56FE\u548C\u6587\u672C\u751F\u56FE\u7684\u5904\u7406\u903B\u8F91</li></ul><h3 id="\u5DF2\u77E5\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u77E5\u95EE\u9898" aria-hidden="true">#</a> \u5DF2\u77E5\u95EE\u9898</h3><ul><li>DeepdanbooruAPI\u5BC4\u4E86\uFF0C\u67E5\u4E66\u529F\u80FD\u6682\u4E0D\u53EF\u7528</li></ul><h2 id="_0-4-5-20221020" tabindex="-1"><a class="header-anchor" href="#_0-4-5-20221020" aria-hidden="true">#</a> 0.4.5_20221020</h2><h3 id="\u65B0\u529F\u80FD-10" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD-10" aria-hidden="true">#</a> \u65B0\u529F\u80FD</h3><ul><li>\u6DFB\u52A0\u4E86\u5728\u7EBF\u8BF4\u660E\u4E66</li></ul><h3 id="\u4FEE\u590D-11" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D-11" aria-hidden="true">#</a> \u4FEE\u590D</h3><ul><li>\u4FEE\u590D\u4E86\u542F\u7528\u5173\u95ED\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86H\u63A7\u5236\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\u7684\u95EE\u9898</li><li>\u4FEE\u590D\u4E86\u4FDD\u5B58\u6587\u4EF6\u65F6\u6CA1\u6709\u6B63\u5E38\u521B\u5EFAoutput\u6587\u4EF6\u5939\u7684\u95EE\u9898</li></ul><h3 id="\u66F4\u6539-12" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539-12" aria-hidden="true">#</a> \u66F4\u6539</h3><ul><li>CD\u63D0\u9192\u4E2D\u6DFB\u52A0\u4E86CD\u5269\u4F59\u7684\u79D2\u6570</li><li>\u66F4\u65B0\u63A8\u9001\u73B0\u5728\u63A8\u9001\u4E00\u6B21\u540E\u5C31\u4E0D\u4F1A\u518D\u63A8\u9001\u4E86</li></ul>',25);function p(v,g){const l=t("ExternalLinkIcon");return r(),d("div",null,[s,a("ul",null,[o,a("li",null,[c,a("a",_,[b,n(l)]),f])]),x])}const A=h(u,[["render",p],["__file","index.html.vue"]]);export{A as default};
