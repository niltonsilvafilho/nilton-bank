/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Fade } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import CardValues from "@/components/CardValues";


const Dashboard = () => {
  const [visible, setVisible] = React.useState(false);
  const [categories, setCategories] = useState([]);

  const handleToggle = () => setVisible(!visible);

  useEffect(() => {
    
    axios.get('http://localhost:3000/teste').then((data: any) => {
      setCategories(data.data)
      console.log(data, ' no fronte')
    })
  }, [])

  return (
    <div className="flex h-screen w-full flex-row bg-slate-900">
      {!visible && <Button onClick={handleToggle}>Clique</Button>}
      {visible && (
        <Fade in={visible}>
          <div className="flex flex-col w-[250px] pt-3 h-screen bg-black transition-[20]">
            <div className="flex justify-between p-2">
              <p className="text-white font-sora text-[12px]">
                nilton
                <span className="text-violet-700	font-sora-bold">Bank</span>
              </p>
              <IoCloseSharp
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
      <div>
        {
          categories &&
          categories.map((category : any) => (
            <CardValues key={category.id} category={category} /> 

          ))
        }

      </div>
    </div>
  );
};

export default Dashboard;
