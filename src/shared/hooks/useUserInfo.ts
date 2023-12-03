import { useModel } from 'umi';

export type AuthorityType = Record<string, boolean>;

const platform: any[] = [];

export const initUserInfo: any = {
  createTime: 0,
  hasPassword: 0,
  invitationCode: '',
  inviteCodeStatus: 0,
  loginName: '',
  nickName: '',
  refreshToken: '',
  registerType: 1,
  token: '',
  userId: -1,
  platform,
  isReadOnly: false,
  isAgent: 0,
  otcValid: 0,
};

// interface UserInfo extends Tmd.UserLoginVO {
//   authority: Record<string, boolean>;
// }

const useUserInfo = (): any => {
  const { initialState } = useModel('@@initialState');

  if (initialState?.userInfo?.adminAuthority) {
    const { adminAuthority } = initialState.userInfo;

    const authority: AuthorityType = {};
    adminAuthority.reduce((previousValue, currentValue) => {
      // eslint-disable-next-line no-param-reassign
      previousValue[currentValue] = true;
      return previousValue;
    }, authority);

    return { authority, ...initialState.userInfo };
  }

  return { authority: {}, ...initUserInfo };
};

export default useUserInfo;
