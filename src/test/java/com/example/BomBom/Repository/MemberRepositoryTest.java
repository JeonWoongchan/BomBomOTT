//
//
//
//import com.example.BomBom.Repository.MemberRepository;
//import com.example.BomBom.Repository.MemberSearchC;
//import com.example.BomBom.Repository.MemberUpdateDto;
//import com.example.BomBom.Service.MemberService;
//import com.example.BomBom.domain.member.Member;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.MockitoJUnitRunner;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//@RunWith(MockitoJUnitRunner.class)
//public class MemberRepositoryTest {
//
//    @Mock
//    private MemberRepository memberRepository;
//
//    @InjectMocks
//    private MemberService memberService;
//
//    @Before
//    public void setUp() {
//        // MemberRepository 메서드의 동작을 정의
//        Member member = new Member(); // 적절한 Member 객체 생성
//        when(memberRepository.save(any(Member.class))).thenReturn(member);
//
//        MemberUpdateDto updateDto = new MemberUpdateDto(); // 적절한 MemberUpdateDto 객체 생성
//        doNothing().when(memberRepository).update(anyLong(), eq(updateDto));
//
//        when(memberRepository.findById(anyLong())).thenReturn(Optional.of(member));
//
//        MemberSearchC searchCond = new MemberSearchC(); // 적절한 MemberSearchC 객체 생성
//        List<Member> members = new ArrayList<>(); // 적절한 Member 리스트 생성
//        when(memberRepository.findAll(eq(searchCond))).thenReturn(members);
//
//        doNothing().when(memberRepository).delete(anyLong());
//    }
//
//    @Test
//    public void testSaveMember() {
//        Member member = new Member("dd","dd","dd"); // 테스트에 사용할 Member 객체 생성
//        Member savedMember = memberService.save(member);
//
//        // 저장된 Member와 예상 결과를 비교
//        assertEquals(member, savedMember);
//    }
//
//    @Test
//    public void testUpdateMember() {
//        Long memberId = 1L; // 테스트에 사용할 Member ID
//        MemberUpdateDto updateDto = new MemberUpdateDto(); // 업데이트할 정보를 담은 객체 생성
//        memberService.updateMember(memberId, updateDto);
//
//        // update 메서드가 호출되었는지 검증
//        verify(memberRepository, times(1)).update(eq(memberId), eq(updateDto));
//    }
//
//    @Test
//    public void testFindMemberById() {
//        Long memberId = 1L; // 테스트에 사용할 Member ID
//        Optional<Member> foundMember = memberService.findMemberById(memberId);
//
//        // findById 메서드가 호출되었는지 검증
//        verify(memberRepository, times(1)).findById(eq(memberId));
//        // 반환된 Optional이 비어 있지 않음을 검증
//        assertTrue(foundMember.isPresent());
//    }
//
//    @Test
//    public void testFindAllMembers() {
//        MemberSearchC searchCond = new MemberSearchC(); // 검색 조건 객체 생성
//        List<Member> foundMembers = memberService.findAllMembers(searchCond);
//
//        // findAll 메서드가 호출되었는지 검증
//        verify(memberRepository, times(1)).findAll(eq(searchCond));
//        // 반환된 Member 리스트가 비어 있지 않음을 검증
//        assertFalse(foundMembers.isEmpty());
//    }
//
//    @Test
//    public void testDeleteMember() {
//        Long memberId = 1L; // 테스트에 사용할 Member ID
//        memberService.deleteMember(memberId);
//
//        // delete 메서드가 호출되었는지 검증
//        verify(memberRepository, times(1)).delete(eq(memberId));
//    }
//}