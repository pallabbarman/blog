export interface BlogTypes {
    idTeam?: string;
    strTeam?: string;
    strLeague?: string;
    strStadium?: string;
    strStadiumThumb?: string;
    strStadiumDescription?: string;
    strTeamBadge?: string;
}

export interface BlogsTypes {
    loading?: boolean;
    blogs: BlogTypes[];
}
