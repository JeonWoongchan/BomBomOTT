
/* 기능들 sql 작성 */

/*회원 로그인 sql */
select password
from member
<<<<<<< HEAD
where userid = #{userid} ,
select *
from member
where userid = #{userid} AND password = #{password}
=======
where userid = #{userid}
>>>>>>> boardN

/* 멤버 자동 업데이트 */


update member
set id = id - 1
where id > #{id}



/* 회원 갯수 조회 */

select count(*) from member;







