var ValidateGeneralInfo = (function ($) {
    var _validateFullName, _validateDob, _validateExistIdentityNo, _validateIdentityNo,
    _validateIssueDate, _validateIssuePlace, _validateExistMobilePhone, _validateMobilePhone,
    _validateExistEmail, _validateEmail, _validateAddress, _validateProvince,
        _validateExistUserName, _validateUserName,
    _validatePassword, _validateConfirmPassword, _validateExistRefer,
        _validateBenefitAccount, _validateBank, _validateBankBranch,
        _validateBranch,
        _validateCustodyId, _validateAccountNo, _validateExistCustodyId, _validateExistAccountNo;

    _validateFullName = function validateFullName(regFullName, identification) {
        var message;
        if (CommonValidate.isBlank(regFullName)) {
            message = Error_message.EMPTY_INPUT;
            Notify.errorElement({message: Error_message.EMPTY_INPUT, id: identification});
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        // Notify.warningElement({
        //     message: "Vui lòng nhập Họ và tên đầy đủ có dấu như thông tin trên Chứng minh nhân dân / Căn cước công dân",
        //     id: identification
        // });
        return null;
    };

    _validateDob = function validateDob(regDob, identification) {
        var message;
        if (CommonValidate.isBlank(regDob)) {
            message = Error_message.EMPTY_INPUT;
        } else if (!CommonValidate.validDate(regDob)) {
            message = Error_message.INVALID_DATE;
        } else if (!CommonValidate.compareYearVsToday(regDob, 101) || CommonValidate.compareDateVsToday(regDob, 0, 0, 0)) {
            message = Error_message.INVALID_BIRTHDAY_DATE;
        } else if (CommonValidate.compareYearVsToday(regDob, 16)) {
            message = Error_message.NOT_ENOUGH_AGE;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistIdentityNo = function validateExistIdentityNo(regIdentityNo, identification) {
        if (!checkIdentityNo(regIdentityNo, "")) {
            var message = "CMND [" + regIdentityNo + "] đã tồn tại. Vui lòng chọn CMND khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    _validateIdentityNo = function validateIdentityNo(regIdentityNo, identification) {
        var message;
        if (CommonValidate.isBlank(regIdentityNo)) {
            message = Error_message.EMPTY_INPUT;
        } else if (isNaN(regIdentityNo)) {
            message = Error_message.INVALID_PHONE;
        } else if (regIdentityNo.length !== 9 && regIdentityNo.length !== 12) {
            message = Error_message.INVALID_IDENTITY_NO;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        // Notify.cleanErrorElement(identification);
        // Notify.warningElement({message: "CMND và CCCD có thể có 9 ký tự số hoặc 12 ký tự số", id: identification});
        return null;
    };

    _validateIssueDate = function validateIssueDate(regIssueDate, regDob, identification) {
        var message;
        if (CommonValidate.isBlank(regIssueDate)) {
            message = Error_message.EMPTY_INPUT;
        } else if (!CommonValidate.validDate(regIssueDate)) {
            message = Error_message.INVALID_DATE;
        } else if (CommonValidate.compareDateVsToday(regIssueDate, 0, 0, 1)) {
            message = Error_message.INVALID_ISSUE_DATE;
        } else if (!CommonValidate.compareDateVsToday(regIssueDate, 15, 0, 1)) {
            message = Error_message.EXPIRE_ISSUE_DATE;
        } else if (!CommonValidate.compareDate(regIssueDate, regDob)) {
            message = Error_message.COMPARE_DOB_IDENTITY_NO;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateIssuePlace = function validateIssuePlace(regIssuePlace, identification) {
        var message;
        if (CommonValidate.isBlank(regIssuePlace)) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistMobilePhone = function validateExistMobilePhone(regMobilePhone, identification) {
        if (!checkPhone(regMobilePhone, "")) {
            var message = "Số điện thoại [" + regMobilePhone + "] đã tồn tại. Vui lòng chọn số điện thoại khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    _validateMobilePhone = function validateMobilePhone(regMobilePhone, identification) {
        var message;
        if (CommonValidate.isBlank(regMobilePhone)) {
            message = Error_message.EMPTY_INPUT;
        } else if (isNaN(regMobilePhone)) {
            message = Error_message.INVALID_PHONE;
        } else if (!CommonValidate.validMobilePhone(regMobilePhone)) {
            message = Error_message.PHONE_INVALID_FORMAT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        // Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistEmail = function validateExistEmail(regEmail, identification) {
        if (!checkEmail(regEmail, "")) {
            var message = "Email [" + regEmail + "] đã tồn tại. Vui lòng chọn email khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    _validateEmail = function validateEmail(regEmail, identification) {
        var message;
        if (CommonValidate.isBlank(regEmail)) {
            message = Error_message.EMPTY_INPUT;
        } else if (!CommonValidate.validEmail(regEmail)) {
            message = Error_message.INVALID_MAIL;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        // Notify.cleanErrorElement(identification);
        return null;
    };

    _validateAddress = function validateAddress(regAddress, identification) {
        var message;
        if (CommonValidate.isBlank(regAddress)) {
            message = Error_message.EMPTY_INPUT;
        } else if (regAddress.trim().length <= 15 || regAddress.trim().length >= 100) {
            message = Error_message.INVALID_ADDRESS;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateProvince = function validateProvince(regProvince, identification) {
        var message;
        if (CommonValidate.isNullOrEmpty(regProvince)) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistUserName = function validateExistUserName(regUserName, identification) {
        if (!checkUsername(regUserName, "")) {
            var message = "Tên đăng nhập [" + regUserName + "] đã tồn tại. Vui lòng chọn tên đăng nhập khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    _validateUserName = function validateUserName(regUserName, identification) {
        var message;
        if (!regUserName) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        // Notify.cleanErrorElement(identification);
        // Notify.warningElement({message: Warning_message.USERNAME, id: identification});
        return null;
    };

    _validatePassword = function validatePassword(regPass, identification) {
        var message;
        if (CommonValidate.isBlank(regPass)) {
            message = Error_message.EMPTY_INPUT;
        } else if (regPass.length < 8 || regPass.length > 32) {
            message = Error_message.INVALID_LENGTH_PASS;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateConfirmPassword = function validateConfirmPassword(regConfirmPass, regPass, identification) {
        var message;
        if (CommonValidate.isBlank(regConfirmPass)) {
            message = Error_message.EMPTY_INPUT;
        } else if (regPass.length < 8 || regPass.length > 32) {
            message = Error_message.INVALID_LENGTH_PASS;
        } else if (regPass !== regConfirmPass) {
            message = Error_message.NOT_MATCH_CONFIRM_PASSWORD;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateBenefitAccount = function validateBenefitAccount(benefitAccount, identification) {
        var message;
        if (CommonValidate.isBlank(benefitAccount)) {
            message = Error_message.EMPTY_INPUT;
            Notify.errorElement({message: Error_message.EMPTY_INPUT, id: identification});
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateBank = function validateBank(benefitBank, identification) {
        var message;
        if (CommonValidate.isNullOrEmpty(benefitBank)) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateBankBranch = function validateBankBranch(benefitBranch, identification) {
        var message;
        if (CommonValidate.isNullOrEmpty(benefitBranch)) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistRefer = function validateExistRefer(regRefer, identification) {
        if (checkRefer(regRefer, "")) {
            var message = "Mã giới thiệu [" + regRefer + "] không tồn tại. Vui lòng kiểm tra lại";
            Notify.warningElement({message: message, id: identification});
        }
    };

    _validateBranch = function (branch, identification) {
        var message;
        if (CommonValidate.isNullOrEmpty(branch)) {
            message = Error_message.EMPTY_INPUT;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateCustodyId = function validateCustodyId(custodyId, identification) {
        var message;
        if (CommonValidate.isBlank(custodyId)) {

        } else if (isNaN(custodyId)) {
            message = Error_message.INVALID_PHONE;
        } else if (custodyId.trim().length !== 6) {
            message = Error_message.INVALID_LENGTH_CUSTODY_ID;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistCustodyId = function validateExistCustodyId(custodyId, identification) {
        if (!checkCustodyId(custodyId, "")) {
            var message = "Số lưu ký [" + custodyId + "] đã tồn tại. Vui lòng chọn số lưu ký khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    _validateAccountNo = function validateAccountNo(accountNo, identification) {
        var message;
        if (CommonValidate.isBlank(accountNo)) {

        } else if (isNaN(accountNo)) {
            message = Error_message.INVALID_PHONE;
        } else if (accountNo.length !== 6) {
            message = Error_message.INVALID_LENGTH_ACCOUNT_NO;
        }

        if (!CommonValidate.isNullOrEmpty(message)) {
            var error = {message: message, id: identification};
            Notify.errorElement(error);
            return error;
        }

        Notify.cleanErrorElement(identification);
        return null;
    };

    _validateExistAccountNo = function validateExistAccountNo(accountNo, identification) {
        if (!checkAccountNo(accountNo, "")) {
            var message = "Số tài khoản đã tồn tại. Vui lòng chọn số khác";
            Notify.errorElement({message: message, id: identification});
        }
    };

    return {
        validateFullName: _validateFullName,
        validateDob: _validateDob,
        validateExistIdentityNo: _validateExistIdentityNo,
        validateIdentityNo: _validateIdentityNo,
        validateIssueDate: _validateIssueDate,
        validateIssuePlace: _validateIssuePlace,
        validateExistMobilePhone: _validateExistMobilePhone,
        validateMobilePhone: _validateMobilePhone,
        validateExistEmail: _validateExistEmail,
        validateEmail: _validateEmail,
        validateAddress: _validateAddress,
        validateProvince: _validateProvince,
        validateExistUserName: _validateExistUserName,
        validateUserName: _validateUserName,
        validatePassword: _validatePassword,
        validateConfirmPassword: _validateConfirmPassword,
        validateBenefitAccount: _validateBenefitAccount,
        validateBank: _validateBank,
        validateBankBranch: _validateBankBranch,
        validateExistRefer: _validateExistRefer,
        validateBranch: _validateBranch,
        validateCustodyId: _validateCustodyId,
        validateExistCustodyId: _validateExistCustodyId,
        validateAccountNo: _validateAccountNo,
        validateExistAccountNo: _validateExistAccountNo
    };
}(jQuery));