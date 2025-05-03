import { Card } from "@heroui/react";

type InfoCardItemProps = {
  id: string | number;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
};

const InfoCardItem = ({
  title,
  subtitle,
  children,
}: InfoCardItemProps) => {
  return (
    <Card className="p-4 my-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="text-base font-medium text-black">{title}</p>
          <p className="text-sm text-zinc-500">{subtitle}</p>
        </div>
        {children && <div>{children}</div>}
      </div>
    </Card>
  );
};

export default InfoCardItem;
