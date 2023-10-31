package com.example.BomBom.Repository;

import com.example.BomBom.Repository.MemberRepositoryMemory;

class MemberRepositoryMemoryTest {

     MemberRepositoryMemory memberRepositoryMemory = new MemberRepositoryMemory();

//     @AfterEach
//     void  afterEach() {
//         memberRepositoryMemory.clearStore();
//     }
//
//     @Test
//    void save() {
//      //given
//         Member member = new Member("1234","1234","kksos28@naver.com", "김규식","김규식","010-2280-9481",new Date());
//
//
//
//      //when
//        Member saveMember = memberRepositoryMemory.save(member);
//
//      //then
//         Member findMember= memberRepositoryMemory.findById(member.getId());
//         assertThat(findMember).isEqualTo(saveMember);
//     }
//
//
//    @Test
//    void findAll() {
//        //given
//        Member member1 = new Member("1234","1234","kksos28@naver.com", "김규식","김규식","010-2280-9481",new Date());
//        Member member2 = new Member("1234","1234","kksos28@naver.com", "김규식1","김규식","010-2280-9481",new Date());
//
//        memberRepositoryMemory.save(member1);
//        memberRepositoryMemory.save(member2);
//        //when
//        List<Member> result = memberRepositoryMemory.findAll();
//
//
//        //then
//        assertThat(result.size()).isEqualTo(2);
//        assertThat(result).contains(member1,member2);
//    }
//
//
//
//    @Test
//    void updateitem() {
//        //given
//        Member member = new Member("1234","1234","kksos28@naver.com", "김규식","김규식","010-2280-9481",new Date());
//
//        Member savedItem = memberRepositoryMemory.save(member);
//        Long itemId = savedItem.getId();
//
//        //when
//
//        Member dto = new Member("1234","1234","kksos28@naver.com", "김규식3","김규식","010-2280-9481",new Date());
//        memberRepositoryMemory.update(itemId, dto);
//
//
//
//        //then
//        Member findItem = memberRepositoryMemory.findById(itemId);
//
//        assertThat(findItem.getUsername()).isEqualTo(dto.getUsername());
//
//    }
}
