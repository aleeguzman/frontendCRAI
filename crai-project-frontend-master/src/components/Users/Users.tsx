import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Users.css';
import { Link, useParams } from 'react-router-dom';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Card } from '@mui/material';
import { apiConnection } from '../../api/apiConnection';
import { Users } from './../../interfaces/Users';
import UserCards from '../UserCard/UserCard';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [newUserName, setNewUserName] = useState<string>('');

    useEffect(() => {
        const getAllUsers = async () => {
          try {
            const response = await apiConnection.get<Users[]>(
              'users/get-all-users'
            );
            if (!response.data) {
              return;
            }
            setUsers(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getAllUsers();
      }, []);
      return (
        <>
        <Header />
        <div className="card-container">
          {
            users.map((usuarios:Users) => <UserCards key={usuarios._id} usuarios={usuarios} />)
          }
        </div>
      </>
    );
    };
    
    export default UserList;
