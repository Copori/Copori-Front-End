export default function validate({ Vid, Vemail, Vpassword, Vpasswordcheck }) {
    const errors = {};

    if (!Vid) {
        errors.Vid = '※아이디가 입력되지 않았습니다.';
    } else if (!/^.{1,20}$/i.test(Vid)) {
        errors.id = '※아이디는 20글자 이내로 입력해주세요.';
    }

    if (!Vemail) {
        errors.Vemail = '※이메일이 입력되지 않았습니다.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Vemail)) {
        errors.Vemail = '※입력된 이메일이 유효하지 않습니다.';
    }

    if (!Vpassword) {
        errors.Vpassword = '※비밀번호가 입력되지 않았습니다.';
    }

    if (Vpassword !== Vpasswordcheck) {
        errors.Vpasswordcheck = '※비밀번호가 일치하지 않습니다.';
    }
    return errors;
}
