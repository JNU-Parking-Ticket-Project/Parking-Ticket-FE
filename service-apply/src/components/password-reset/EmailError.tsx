interface EmailErrorProps {
  isError: boolean;
}

const EmailError = ({ isError }: EmailErrorProps) => {
  return (
    <div>
      <span className="flex flex-row-reverse text-sm w-full">
        {isError && (
          <p className="text-[#DC0000]">이메일이 올바르지 않습니다.</p>
        )}
      </span>
    </div>
  );
};

export default EmailError;
