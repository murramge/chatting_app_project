# 채팅 앱 프로젝트(Chatting app Project)


## Period

 > 2022.03

## Explanation
  - node.js와 express를 복습하고자 하는 마음에서 만든 채팅어플 사이드 프로젝트이다.
  - 채팅의 전반적인 기능 (친구찾기, 친구추가, 친구와의 채팅, 채팅방, 프로필사진, 상태메시지 등)을 Express Router와 Middleware, socket을 사용하여 만들어보았음.
  - socket을 공부하고 채팅 연결에 대해 알고자 채팅 어플을 만들어보기로 결정했다.
  - heroku 서버를 연결하고 AWS를 사용하여 업로드된 파일을 관리할 수 있도록 함.

## Teck Stack

 <p align="center">
     <img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a>&nbsp
     <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=white"/></a>&nbsp

## About Project 

### Router 
   프로젝트에 알맞게 url의 정의와 url이 클라이언트 요청에 응답하는 방식을 구현
 #### rootRouter
 프로젝트에서 제일 root로 사용이 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 / 이다.

       / -> 서버로 들어갔을 때 가장 처음 보일 수 있는 페이지이다. 여기서 로그인을 할 수 있도록 만들어주었다.
       /join -> 회원가입을 할 수 있는 라우터이다.
       /logout -> 로그아웃을 할 수 있도록 구성하는 라우터이다.
       
  #### friendRouter
  프로젝트에서 친구 관련으로 사용이 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 /friend 이다.
  
       /friend/:id -> 유저의 친구 정보창을 볼 수 있는 페이지이다.
       /friend/:id/edit -> 유저의 상태메시지와 프로필사진, 이름을 바꿀 수 있는 페이지이다.
       /friend/search -> 유저가 친구를 찾을 수 있는 친구찾기 페이지이다.
       
 #### chatRouter
  프로젝트에서 채팅 관련으로 사용 되는 router이다. url이 정의될 때 라우터의 첫 페이지가 /chat 이다.
     
       /chat/:id -> 유저가 친구에게 채팅을 걸 때 만들어지는 페이지이다.
       /chat/:id/room -> 유저가 대화방 자체를 들어갔을 때 페이지이다.
       /chat/:id/chattingroom -> 하단 바에 채팅 아이콘을 눌렀을 때 보여지는 대화방 페이지이다.
       
## Preview

<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165376326-3ea15e0d-58b8-43b9-88e1-98a9a242d09e.png" width="300" height="650">
 <img src="https://user-images.githubusercontent.com/60298173/165376322-c29f262d-6065-4d21-bab1-40be36424661.png" width="300" height="650">
</div>
</div>


회원가입과 로그인 화면이다. 로그인은 email로 가능하다.


<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165376943-32b35097-c193-4bc5-ab33-a19bec14b3da.png" width="300" height="650">
 <img src="https://user-images.githubusercontent.com/60298173/165376307-f80c4604-1c77-4c1e-8834-f4dab8de9407.png" width="300" height="650">
</div>
 </div>

친구 목록과 edit profile을 누르면 나타나는 유저 edit 화면이다.
- 상태메시지, 이름, 프로필 사진을 변경할 수 있다.
 
<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165376302-ab28f6d3-a135-4fb5-8d16-a1b8a83aa96b.png" width="300" height="650">
 <img src="https://user-images.githubusercontent.com/60298173/165376296-cf6900f6-925a-446f-b2f0-e672d10080d7.png" width="300" height="650">
</div>
 </div>
 
 친구 추가와 친구목록에 친구를 눌렀을 때 친구 정보를 볼 수 있는 화면이다.
 - 친구 추가는 email로 찾을 수 있다.
 - 친구 정보에서 1:1 채팅을 누르면 chatting창으로 바로 들어가진다.
  
<div style="display:flex">
<div style="display:inline-block">
<img src="https://user-images.githubusercontent.com/60298173/165376289-c57706d1-3f7f-4636-ae76-91033ef8295e.png" width="300" height="650">
 <img src="https://user-images.githubusercontent.com/60298173/165376270-92cb0ca2-2fe8-47f4-91a4-3843577a6cc9.png" width="300" height="650">
</div>
 </div>
 
 채팅을 전송할 수 있는 채팅 화면과, 하단바에서 채팅 이모지를 누를 때 나오는 채팅방 화면이다.
 - 채팅방 화면을 클릭하면 채팅화면으로 들어가진다.
 - 하단 바 맨 오른쪽은 logout 이다.
 
 

