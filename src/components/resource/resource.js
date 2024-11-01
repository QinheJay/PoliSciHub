import { h } from "vue"
import { NIcon } from "naive-ui"
import {
    FileTrayFullOutline,
    Folder,
    FolderOpenOutline
} from "@vicons/ionicons5";
import {
    Ppt,
    DocumentWordProcessor,
    DocumentPdf
} from "@vicons/carbon";

export const data = [
    {
        key: "Alevel-Politics",
        label: "Alevel Politics",
        prefix: () => h(NIcon, null, {
            default: () => h(Folder)
        }),
        children: [
            {
                key: "Exam-Skills",
                label: "Exam Skills",
                prefix: () => h(NIcon, null, {
                    default: () => h(Folder)
                }),
                children: [
                    {
                        key: "General",
                        label: "General",
                        prefix: () => h(NIcon, null, {
                            default: () => h(Folder)
                        }),
                        children: [
                            {
                                key: "PR-EDEXCEL-exam-questions",
                                label: "PR EDEXCEL exam questions.pdf",
                                prefix: () => h(NIcon, null, {
                                    default: () => h(DocumentPdf)
                                }),
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                key: "Extra",
                label: "Extra",
                children: []
            },
            {
                key: "Unit-1",
                label: "Unit 1 UK Politics",
                children: []
            },
            {
                key: "Unit-2",
                label: "Unit 2 UK Government",
                children: []
            },
            {
                key: "Unit-3",
                label: "Unit 3 Core - Non-Core Political Ideas",
                children: []
            },
            {
                key: "Unit-4",
                label: "Unit 4 Comparative Global Politics",
                children: []
            }
        ]
    },
    {
        key: "AP-US-Government",
        label: "AP US Government",
        children: []
    },
    {
        key: "Future-World-Order",
        label: "Future World Order",
        children: []
    },
    {
        key: "Global-Politics",
        label: "Global Politics",
        children: []
    },
    {
        key: "Politics-Ideologies",
        label: "Politics Ideologies",
        children: []
    },
    {
        key: "TPC-Resources",
        label: "TPC Resources",
        children: []
    }
]