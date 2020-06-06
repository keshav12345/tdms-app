package in.codeblog.tdms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.codeblog.tdms.domain.User;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	Iterable<User> findByRole(String role);
	
	
	
	

}