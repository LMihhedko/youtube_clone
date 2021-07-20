import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';

export const SideBarData = [
    {
        path: '/',
        title:'Home',
        icon: <DashboardIcon/>
    },
    {
        path: '/watch',
        title:'Watch',
        icon: <SearchIcon/>
    },
    {
        path: '/history',
        title:'History',
        icon: <QueryBuilderIcon/>
    },
    {
        path: '/favorites',
        title:'Favorites',
        icon: <FavoriteIcon/>
    },




]
