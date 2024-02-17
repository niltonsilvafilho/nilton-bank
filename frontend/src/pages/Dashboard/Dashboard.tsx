/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Fade } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import CardValues from "@/components/CardValues";
import { Category } from "@prisma/client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const [visible, setVisible] = React.useState(false);
  const [addInitialBalance, setAddInitialBalance] = React.useState(true);
  const [categories, setCategories] = useState([]);
  const [initialSaldo, setInitialSaldo] = useState("");
  const [expense, setExpenses] = useState();
  const [earning, setEarning] = useState();
  const [balance, setBalance] = useState();

  const handleToggle = () => setVisible(!visible);

  useEffect(() => {
    axios.get("http://localhost:3000/teste").then((data) => {
      setCategories(data.data);
      console.log(data, " no fronte");
    });

    axios.get("http://localhost:3000/balance").then((data) => {
      setBalance(data.data);
      console.log(data.data, " balanço");
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeInitial = (event: any) => {
    setInitialSaldo(event.target.value);
  };

  const handleAddInitialBalance = () => {
    setAddInitialBalance(!addInitialBalance);

    console.log(initialSaldo);

    axios.post("http://localhost:3000/movements", {
      categoryId: parseInt("3"),
      value: parseFloat(initialSaldo),
    });

    toast("Saldo inicial adicionado!", {
      action: {
        label: "Fechar",
        onClick: () => console.log("fechou"),
      },
    });
  };

  return (
    <div className="flex flex-row h-screen w-full bg-slate-900	">
      <div>
        {!visible && (
          <Button onClick={handleToggle}>
            <IoMenu size={24} />
          </Button>
        )}
        {visible && (
          <Fade in={visible}>
            <div className="flex flex-col w-[250px] pt-3 h-screen bg-black transition-[20]">
              <div className="flex justify-between p-2">
                <p className="text-white font-sora text-[16px]">
                  nilton
                  <span className="text-violet-700	font-sora-bold">Bank</span>
                </p>
                <IoCloseSharp
                  size={24}
                  className="cursor-pointer"
                  color="white"
                  onClick={() => setVisible(!visible)}
                />
              </div>

              <div className="flex flex-col items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-white">Nilton Filho</p>
                <p className="text-white">niltonandfilho@gmail.com</p>
              </div>

              <div>
                <Button variant="ghost" className="w-full  text-white">
                  <FaMoneyBillTransfer color="white" className="mr-2 h-4 w-4" />{" "}
                  Transações
                </Button>
                <Button
                  variant="ghost"
                  color="white"
                  className="w-full text-white"
                >
                  <IoIosLogOut className="mr-2 h-4 w-4" /> Sair
                </Button>
              </div>
            </div>
          </Fade>
        )}
      </div>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="flex flex-wrap justify-center">
          {addInitialBalance && (
            <div>
              <Card className="max-w-md w-[300px] h-40 m-3  flex flex-col items-center justify-center">
                <CardHeader>
                  <CardTitle>Adicione seu saldo inicial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full max-w-sm items-center space-x-3">
                    <Input
                      id="saldo"
                      type="number"
                      value={initialSaldo}
                      onChange={handleChangeInitial}
                      placeholder="R$ 2.000"
                    ></Input>
                    <Button
                      type="submit"
                      onClick={handleAddInitialBalance}
                      variant="outline"
                    >
                      Confirmar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {!addInitialBalance && (
            <div>
              <Card className="max-w-md w-[300px] h-40 m-3  flex flex-col items-center justify-center">
                <CardHeader>
                  <CardTitle>Adicione seu saldo inicial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full max-w-sm items-center space-x-3">
                    <Input
                      id="saldo"
                      type="number"
                      disabled
                      value={initialSaldo}
                      onChange={handleChangeInitial}
                      placeholder="R$ 2.000"
                    ></Input>
                    <Button
                      type="submit"
                      disabled
                      onClick={handleAddInitialBalance}
                      variant="outline"
                    >
                      Confirmar
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Saldo Inicial adicionado!</p>
                </CardFooter>
              </Card>
            </div>
          )}

          <Card className="max-w-md w-[300px] h-40 m-3  flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Adicione uma despesa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-3">
                <Input
                  id="expenses"
                  type="number"
                  value={expense}
                  onChange={handleChangeInitial}
                  placeholder="R$ 2.000"
                ></Input>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log(initialSaldo, "aqui");
                  }}
                  variant="outline"
                >
                  Confirmar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="max-w-md w-[300px] h-40 m-3  flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Adicione um ganho</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-3">
                <Input
                  id="earnings"
                  type="number"
                  value={earning}
                  onChange={handleChangeInitial}
                  placeholder="R$ 2.000"
                ></Input>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log(initialSaldo, "aqui");
                  }}
                  variant="outline"
                >
                  Confirmar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-wrap w-full max-h-40 justify-center mt-10">
          {categories.map((category: Category) => (
            <CardValues key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
