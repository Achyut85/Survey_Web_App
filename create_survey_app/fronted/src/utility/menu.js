import {  Summary, Questionnaire, Audience, Setting , SingleSelection, MultiSelection,OpenEnded , NumericOpenEnded , Description , Star , Ranking , Trash , Duplicate , MoveVertical , Interactive} from "../assets/icons"
export const dashbordMenuItem = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 2,
        title: "Draft",
    },
    {
        id: 3,
        title: "Under approval",
    },
    {
        id: 4,
        title: "Approved",
    },
    {
        id: 5,
        title: "Running",
    },
    {
        id: 6,
        title: "Paused"
    },
    {
        id: 7,
        title: "Completed",
    },
    {
        id: 8,
        title: "Under edit",
    },

]

export const projectMenuItem = [
    {
        id: 9,
        title: "Summary",
        icon: Summary,
    },
    {
        id: 10,
        title: "Questionnaire",
        icon: Questionnaire,
    },
    {
        id: 11,
        title: "Audiences",
        icon:Audience,
    },
    {
        id: 12,
        title: "Settings",
        icon:Setting,
    },
]

export const questionTypes = [
    {
        id: 1,
        title: "Single selection",
        icon: SingleSelection,
        questionType:"SINGLE_SELECTION"
    },

    {
        id: 2,
        title: "Multi selection",
        icon: MultiSelection,
        questionType:"MULTI_SELECTION",
    },

    {
        id: 3,
        title: "Open-ended",
        icon: OpenEnded,
        questionType:"OPEN_ENDED",
    },

    {
        id: 4,
        title: "Numeric open-ended",
        icon: NumericOpenEnded,
        questionType:"NUMERIC_OPEN_ENDED",
    },
    {
        id: 5,
        title: "Description",
        icon: Description,
        questionType:"DESCRIPTION",
    },

    {
        id: 6,
        title: "Rating stars",
        icon: Star,
        questionType:"STAR",
    },

    {
        id: 7,
        title: "Ranking",
        icon: Ranking,
        questionType:"RANKING",
    },
]

export const fiveStars = [
    {
        id :1,
        active : false
    },

    {
        id:2,
        active : false
    },

    {
        id:3,
        active : false
    },

    {
        id:4,
        active : false
    },

    {
        id:5,
        active : false
    }

]
 export  const questionMenuList = [

    {
        id:1,
        title : "Duplicate",
        icon:Duplicate
    },
    {
        id:2,
        title : "Delete",
        icon:Trash
    },

    {
        id:3,
        title : "Move",
        icon:MoveVertical
    },

    {
        id:4,
        title : "Interactive mode",
        icon:Interactive
    },




  ]
