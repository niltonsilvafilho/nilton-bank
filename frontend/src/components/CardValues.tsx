import { GiReceiveMoney } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

import { Category } from "@prisma/client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

interface ICategoryProps {
  category: Category;
}

const CardValues = ({ category }: ICategoryProps) => {
  const categoryIcon = {
    earnings: <GiReceiveMoney size={38} />,
    expenses: <FaRegMoneyBillAlt size={38} />,
    balance: <FaBalanceScale size={38} />,
  };
  return (
    <Card className="max-w-md w-[300px] h-40 m-3  flex flex-col  justify-center">
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <p>R$250.00</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
      </CardFooter>
    </Card>
  );
};
export default CardValues;
