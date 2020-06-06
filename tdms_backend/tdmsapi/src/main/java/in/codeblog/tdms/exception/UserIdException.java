package in.codeblog.tdms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserIdException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	public UserIdException(String errorMsg) {
		super(errorMsg);
	}
}
