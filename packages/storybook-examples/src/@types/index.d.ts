type GlobalWindow = Window & globalThis;
declare global {
  type Window = GlobalWindow & {
    /* eslint-disable @typescript-eslint/naming-convention */
    _app_conf: any;
    _app_messages: any;
    /* eslint-enable @typescript-eslint/naming-convention */
    fcWidget: {
      init: (params: { token: string; host: string }) => void;
      user: {
        setFirstName: (id: string) => void;
        setLastName: (id: string) => void;
        setEmail: (id: string) => void;
      };
      setExternalId: (id: string) => void;
    };
  };
}
