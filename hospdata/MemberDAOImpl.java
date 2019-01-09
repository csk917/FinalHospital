package web.hosp.link;

import javax.inject.Inject;

import org.springframework.stereotype.Repository;

@Repository
public class MemberDAOImpl implements MemberDAO {
    
    private static final String NAMESPACE = "userMap";
    
    private final SqlSession sqlSession;

    @Inject
    public MemberDAOImpl(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }
    
    // 회원가입처리
    @Override
    public void register(CommandMap commandMap) throws Exception {
        sqlSession.insert(NAMESPACE + ".register", commandMap);
    }
    
}